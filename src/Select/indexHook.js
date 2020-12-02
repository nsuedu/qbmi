import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Select, Spin, message } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { throttle, isFunction } from 'lodash';
import { isPromise } from '@/utils/selectRequestUtils';

import styles from './index.less';

const { Option } = Select;

export default props => {
  const {
    onChange: onChangeProps,
    value: valueProps = undefined,
    selectProps,
    options: optionsProps = [],
    dataServer,
    dataHandler,
    defaultValue,
    defaultQuery = null,
  } = props;

  const [value, setValue] = useState(defaultValue);
  const [options, setOptions] = useState(optionsProps);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState(defaultQuery);

  const usePrevious = val => {
    const ref = useRef();
    useEffect(() => {
      ref.current = val;
    });
    return ref.current;
  };

  const debounceSearch = useCallback(async () => {
    if (Array.isArray(optionsProps) && optionsProps.length > 0) {
      setLoading(false);
    } else if (isFunction(dataServer)) {
      setLoading(true);
      const res = await dataServer({ input: query });
      const newDatas = isFunction(dataHandler) ? dataHandler(res) : res;
      setOptions(newDatas);
      setLoading(false);
    }
  }, [query, dataServer, dataHandler, optionsProps]);

  useEffect(() => {
    const initialData = async () => {
      try {
        debounceSearch();
      } catch (error) {
        message.error(error);
      }
    };
    initialData();
  }, [query]);

  return (
    <Select
      value={value}
      loading={loading}
      notFoundContent={loading ? <Spin size="small" /> : null}
      filterOption={false}
      showSearch
      onSearch={val => {
        const str = val.replace(/\s+/g, '');
        if (str && str.length > 0) {
          setQuery(str);
        }
      }}
      onChange={val => {
        if (!(valueProps && onChangeProps)) {
          setValue(val);
        } else if (isFunction(onChangeProps)) {
          onChangeProps(val, options);
        }
      }}
      style={{ width: '100%' }}
      dropdownClassName="custDrop"
      onFocus={async () => {
        await setQuery(null);
        debounceSearch();
      }}
      // onBlur={() => {
      //   setQuery(null)
      // }}
      {...selectProps}
    >
      {options.map(d => (
        <Option key={d.value} disabled={d.disabled} value={d.value}>
          {d.label}
        </Option>
      ))}
    </Select>
  );
};
