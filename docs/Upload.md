---
title: 上传组件(Upload)
nav:
  title: Components
  path: /components
group:
  title: 数据录入
  path: /data-record
---

## 代码演示

<code src="../demos/Upload.tsx" />

## API

| 成员 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 发到后台的文件参数名 | string | file |
| listType | 上传列表的内建样式，支持三种基本样式 text, picture 和 picture-card | string | text |
| fileNumberLimit | 文件上传数量限制 | number | 5 |
| buttonText | 上传按钮的文字 | string | 上传 |
| action | 上传的接口调用 url | string\|(file) => Promise |
| fileType | 上传文件类型 支持'jpg', 'png', 'bmp', 'pdf'等 | string |
| defaultFileList | 默认已经上传的文件列表 | object[] |
| onChange | 上传文件改变时的状态 | Function |
| previewVisible | 图片预览文件窗口是否可见 | Boolean | false |
| previewFile | 自定义文件预览逻辑 | (file: File \| Blob) => Promise<dataURL: string> |
| previewPDFVisible | PDF 预览文件窗口是否可见 | Boolean | false |
| previewPDFUrl | 自定义 PDF 文件预览逻辑 | (file: File \| Blob) => Promise<dataURL: string> |
| fileList | 已经上传的文件列表（受控），使用此参数时，如果遇到 onChange 只调用一次的问题 | object[] |
| loading | 文件上传是否完成 | Boolean | true |

```javascript
/*
file.type      后缀

text/plain    .txt
application/vnd.android.package-archive   .apk
application/vnd.openxmlformats-officedocument.presentationml.presentation    .pptx
application/vnd.openxmlformats-officedocument.spreadsheetml.sheet            .xlsx
application/pdf                                                               .pdf

image/jpeg
image/png
image/bmp


bmp、jpg、png gif
*/

/*
    fileList: [
      // {
      //   uid: '-1',
      //   name: 'image.png',
      //   status: 'done',
      //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      // },
      // {
      //   uid: '-5',
      //   name: 'image.png',
      //   status: 'error',
      // },
    ]

*/
```
