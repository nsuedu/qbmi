/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */

import { extend } from 'umi-request';
import { notification } from 'antd';
import { isObject } from 'lodash';
import { history } from 'umi';
import { apiPrefix } from '../../../constants';

// 401报错重复处理
let authFalse = false;

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
/**
 * 异常处理程序
 */

const errorNotice = (message, description) => {
  if (!authFalse) {
    authFalse = true;
    notification.error({
      message,
      description,
      onClose: () => {
        authFalse = false;
      },
    });
  }
};

const errorHandler = error => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;
    // 401处理
    if (status === 401) {
      // 刷新失败跳转登录
      localStorage.clear();
      history.push('/');
    }
    errorNotice(`请求错误 ${status}: ${url}`, errorText);
  } else if (!response) {
    errorNotice('网络异常', '您的网络发生异常，无法连接服务器');
  }
  return response;
};
/**
 * 配置request请求时的默认参数
 * ~静态配置
 */
const request = extend({
  errorHandler,
  // 默认错误处理
  // credentials: 'include', // 默认请求是否带上cookie
  // 浏览器不在请求中包含凭据
  credentials: 'omit',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    mode: 'cors',
  },
});

/**
 * request拦截器, 改变url 或 options.
 * ~动态配置
 */
request.interceptors.request.use((url, options = {}) => {
  const newUrl = url;
  let newOptions = { ...options };
  const tokenInfo =
    localStorage.tokenInfo && localStorage.tokenInfo !== 'null'
      ? JSON.parse(localStorage.tokenInfo)
      : {};
  // 非登录接口添加token
  if (!url.includes('/account/login')) {
    newOptions.headers.Authorization = `Bearer ${tokenInfo.accessToken}`;
  }

  // 刷新token去掉Authorization
  if (url.includes('/account/refresh')) {
    newOptions.headers.Authorization = null;
  }

  // 开发环境添加租户信息
  // const addr = window.location.origin;

  // if (addr.includes('localhost:')) {
  //   newOptions.headers.Tenant = '05e8c098-81e6-4ffa-9d37-6918818b699d';
  // }

  if (options.method === 'post') {
    if (isObject(options.body)) {
      newOptions = { ...newOptions, body: JSON.stringify(options.body) };
    }
  }
  return {
    url: newUrl,
    options: newOptions,
  };
});

// 克隆响应对象做解析处理
request.interceptors.response.use(async responseSelf => {
  const resObj = responseSelf.clone();
  let data;
  if (resObj.status === 200) {
    data = await resObj.json();
  } else {
    data = null;
  }
  // 处理token失效
  const { tokenExpires } = localStorage;
  const currentTime = new Date().getTime();
  // token失效前4小时刷新
  if (tokenExpires > 0 && tokenExpires - currentTime < 14400000) {
    const tokenInfo =
      localStorage.tokenInfo && localStorage.tokenInfo !== 'null'
        ? JSON.parse(localStorage.tokenInfo)
        : {};
    request(`${apiPrefix}/account/refresh`, {
      method: 'POST',
      data: {
        refreshToken: tokenInfo.refreshToken,
      },
    }).then(resp => {
      if (resp && resp.data && resp.data.tokenInfo) {
        localStorage.tokenInfo = JSON.stringify(resp.data.tokenInfo);
        localStorage.tokenExpires = new Date().getTime() + resp.data.tokenInfo.expires * 1000;
      } else {
        localStorage.tokenInfo = null;
        localStorage.tokenExpires = 0;
        history.push('/');
      }
    });
  }
  // 处理返回数据
  if (data) {
    if (data.success) {
      return responseSelf;
    }
    if (!authFalse) {
      notification.error({
        message: '提示',
        duration: 2.5,
        description: data.msg,
        onClose: () => {
          authFalse = false;
        },
      });
    }
    // 强制下线和其他地方登录
    if (data.code === 10005 || data.code === 10006) {
      authFalse = true;
      localStorage.tokenInfo = null;
      localStorage.tokenExpires = 0;
      history.push('/');
    }
  }
  return responseSelf;
});

export default request;
