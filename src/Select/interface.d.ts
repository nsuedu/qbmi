import { LabeledValue } from 'antd/lib/select/index.d';

export interface IProps {
  isLoading?: boolean;
  options?: LabeledValue[];
  dataServer?: (val: any) => Promise<any>;
  dataHandler?: (val: LabeledValue[]) => LabeledValue[];
  onChange?: (value: ValueType, option: OptionsType[number] | OptionsType) => void;
}

export interface IState {
  options: LabeledValue[];
  query?: string | null;
  value?: string | string[] | number | number[] | LabeledValue | LabeledValue[];
  fetching: boolean;
  cancelDisable?: boolean;
  currentPage?: number;
  totalPage?: number;
}

export interface IfetchData {
  input?: string;
  page?: number;
}
