import { UploadFile, UploadListType, UploadProps } from 'antd/lib/upload/interface';

export interface KBUploadProps extends UploadProps {
  // ['jpg', 'png', 'bmp', 'pdf']
  fileType: Array<string>;
  fileNumberLimit: number;
  listType: UploadListType;
  name: string;
  buttonText: string;
  defaultFileList: Array<UploadFile>;
  onChange: (val: Array<string>) => void;
  isReload?: boolean;
}

export interface KBUploadState {
  previewVisible: boolean;
  previewImage: string;
  loading: boolean;
  fileList: Array<UploadFile>;
  previewPDFUrl: string;
  previewPDFVisible: boolean;
}
