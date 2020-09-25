import React from 'react';
import { Descriptions as DescriptionList } from 'antd';

interface DescriptionData {
  label: string;
  span?: number;
  value?: string;
  [propName: string]: any;
}

interface IProps {
  list?: DescriptionData[];
  title?: string;
  col?: number;
  [propName: string]: any;
}

const Descriptions: React.FC<IProps> = props => {
  const { list = [], title = '', col = 3, ...rest } = props;
  return (
    <DescriptionList title={title} column={col} {...rest}>
      {list &&
        Array.isArray(list) &&
        list.length > 0 &&
        list.map(item => (
          <DescriptionList.Item label={item.label} span={item.span || 1}>
            {item.value || '--'}
          </DescriptionList.Item>
        ))}
    </DescriptionList>
  );
};

export default Descriptions;
