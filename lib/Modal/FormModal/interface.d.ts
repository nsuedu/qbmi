export interface IProps {
  title: string;
  visible: boolean;
  size?: string;
  width?: number;
  okText: string;
  cancelText: string;
  otherText: string;
  otherType: 'default' | 'link' | 'text' | 'ghost' | 'primary' | 'dashed' | undefined;
  params: {};
  onOk: () => void;
  onCancel: () => void;
  onClose: () => void;
  onHandleOther: () => void;
  footer: React.ReactNode | string;
}

export interface IState {}
