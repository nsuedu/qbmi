export interface IFile {
  uid: string; // 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突
  name: string; // 文件名
  status?: 'uploading' | 'done' | 'error' | 'removed'; // 状态有：uploading done error removed，被 beforeUpload 拦截的文件没有 status 属性
  response?: any; // 服务端响应内容
  linkProps?: any; // 下载链接额外的 HTML 属性
  url?: string;
  thumbUrl?: string;
}
