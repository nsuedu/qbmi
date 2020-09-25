export interface ITree {
  key?: string;
  value?: string;
  title?: string;
  label?: string;
  children?: ITree[];
  parentId?: string | null;
  disabled?: boolean;

  origin?: any;
  isChecked?: boolean;

  number?: string | number;
}
