import { UploadFile } from 'antd/lib/upload/interface';

const pdfPreviewImg = require('./pdfPre/pdfPreview.svg');

export const getFileType = (filename = '', type = 'pdf') => {
  if (filename) {
    const index = filename.lastIndexOf('.');
    const suffix = filename.substr(index + 1);
    return suffix === type;
  }
  return false;
};

export const setThumbUrl = (arr = []) =>
  arr.map((item: UploadFile) => {
    if (item && typeof item === 'string') {
      const res: UploadFile = {
        uid: `${item}`,
        name: item,
        status: 'done',
        url: item,
      };
      //  isPDF ?
      if (getFileType(item, 'pdf')) {
        res.thumbUrl = pdfPreviewImg;
      }

      return res;
    }

    if (
      getFileType(item.name, 'pdf') ||
      getFileType(item.url, 'pdf') ||
      item.type === 'application/pdf'
    ) {
      return {
        ...item,
        thumbUrl: pdfPreviewImg,
      };
    }
    return item;
  });

export function getBase64(file: File | Blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
