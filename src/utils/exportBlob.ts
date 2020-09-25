import { notification } from 'antd';

const tokenInfo =
  localStorage.tokenInfo &&
  localStorage.tokenInfo !== 'undefined' &&
  localStorage.tokenInfo !== 'null'
    ? JSON.parse(localStorage.tokenInfo)
    : {};

const requestHeaders = {
  Authorization: `Bearer ${tokenInfo.accessToken}`,
};

export default function(downloadUrl: string, fileName: string) {
  fetch(downloadUrl, {
    method: 'GET',
    headers: {
      ...requestHeaders,
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate',
      'Accept-Language': 'zh-CN,zh;q=0.9',
    },
    body: null,
  })
    .then(res => {
      if (res.status !== 200) {
        notification.error({
          description: '请求发生错误，不能正确导出！',
          message: '错误',
        });
        return null;
      }
      return res.blob();
    })
    .then(data => {
      if (data) {
        const blob = new Blob([data]);
        const elink = document.createElement('a');
        elink.download = `${fileName}.xlsx`;
        elink.href = URL.createObjectURL(blob);
        elink.click();
      }
    });
}
