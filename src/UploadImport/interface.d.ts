export interface columns {}

export interface IParams {
  statistics: {
    errorRowCount?: number;
    total: number;
  };
  columns: [];
  tableData: [];
}

export interface IProps {
  params: IParams;
  disableFormRef: () => void;
  [a: string]: any;
}
