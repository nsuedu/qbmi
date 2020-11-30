import React, { useEffect } from 'react';
import { Form, Input, Button, DatePicker, Radio, TreeSelect, Row, Col, InputNumber } from 'antd';
import moment from 'moment';
import { isFunction, pickBy, isObject, flatMap } from 'lodash';

import Select from '../../Select';
import CustTreeSelect from '../../TreeSelect';

import './index.less';

const { RangePicker } = DatePicker;
const { SHOW_PARENT } = TreeSelect;

interface IProps {
  onFinish?: Function;
  options?: any[];
  formLayout?: any;
  initialValues?: any;
  onValuesChange?: ((changedValues: any, values: any) => void) | undefined;
  format?: string;
  onFormReset?: Function;
  [propName: string]: any;
}
const StandardForm: React.FC<IProps> = (props) => {
  const {
    onFinish: handleFinish,
    options,
    formLayout,
    initialValues,
    onValuesChange,
    format = 'YYYY-MM-DD',
    onFormReset,
  } = props;
  const [form] = Form.useForm();

  useEffect(() => {
    const thisValues = {};
    if (initialValues) {
      Object.keys(initialValues).forEach((item) => {
        if (isObject(initialValues[item])) {
          if (initialValues[item].type === 'time') {
            thisValues[`time-${item}`] = moment(initialValues[item].value);
          } else {
            thisValues[item] = initialValues[item];
          }
        } else {
          thisValues[item] = initialValues[item];
        }
      });
      form.setFieldsValue(thisValues);
    }
  }, [initialValues]);

  // 重置
  const timeArr = {};
  const onFinish = (values: any, refresh?: string) => {
    const newValues = {};
    Object.keys(values).forEach((item) => {
      if (item.indexOf('times-') >= 0) {
        const name = item.split('-')[1];
        newValues[timeArr[name][0]] =
          values[item] && values[item][0] ? values[item][0].format(format) : '';
        newValues[timeArr[name][1]] =
          values[item] && values[item][1] ? values[item][1].format(format) : '';
      } else if (item.indexOf('time-') >= 0) {
        const name = item.split('-')[1];
        // if (newValues[name]) {
        newValues[name] = values[item] ? values[item].format(format) : '';
        // }
      } else if (isObject(values[item]) && values[item].label) {
        newValues[item] = values[item].value || values[item].key;
      } else {
        newValues[item] = values[item];
      }
    });
    return (
      isFunction(handleFinish) &&
      handleFinish(
        pickBy(newValues, (value) => {
          return value !== undefined && value !== null;
        }),
        refresh,
      )
    );
  };
  const onReset = () => {
    form.resetFields();
    const values = form.getFieldsValue();
    if (onFormReset) {
      onFinish(values, 'no');
      onFormReset();
    } else {
      onFinish(values);
    }
  };
  // 提交

  // 校验未通过
  const onFinishFailed = (errorInfo: any) => {
    return isFunction(handleFinish) && handleFinish(errorInfo);
  };

  interface RenderRadioItem {
    value: string;
    text?: string;
    name?: string;
    [propName: string]: any;
  }
  // 渲染单选按钮选项
  const renderRadio = (list: RenderRadioItem[] = []) => {
    return list.map((item) => {
      return (
        <Radio key={item.value} value={item.value}>
          {item.text}
        </Radio>
      );
    });
  };

  interface RenderItems {
    placeholder?: string;
    type?: string;
    selectProps?: any;
    options?: any[] | RenderRadioItem[];
    dataServer?: (params?: any) => Promise<any>;
    format?: string;
    showTime?: boolean;
    allowClear?: boolean;
    picker?: 'time' | 'date' | 'week' | 'month' | 'quarter' | 'year' | undefined;
    [propName: string]: any;
  }
  // 渲染菜单项
  const renderItems = (item: RenderItems) => {
    let tProps = null;
    // let comWidth = 272;
    // return list.map(item => {
    let FormItem = <Input placeholder={item.placeholder} allowClear className="searchForm-field" />;
    switch (item.type) {
      case 'select':
        FormItem = (
          <Select
            selectProps={{
              allowClear: true,
              className: 'searchForm-field',
              ...item.selectProps,
            }}
            options={item.options}
            dataServer={item.dataServer}
          />
        );
        break;
      case 'rangePicker':
        FormItem = (
          <RangePicker
            allowClear
            format={item.format || 'YYYY-MM-DD'}
            showTime={item.showTime}
            // showTime={{
            //   hideDisabledOptions: true,
            //   defaultValue: [moment('00:00', 'HH:mm'), moment('11:59', 'HH:mm')],
            // }}
            className="searchForm-field"
          />
        );
        break;
      case 'inputNumber':
        FormItem = <InputNumber className="searchForm-field" />;
        break;

      case 'textArea':
        FormItem = <Input.TextArea allowClear className="searchForm-field" />;
        break;
      case 'datePicker':
        FormItem = (
          <DatePicker
            // defaultValue={
            //   initialValues && initialValues[`time-${item.name}`]
            //     ? moment(initialValues[`time-${item.name}`])
            //     : null
            // }
            allowClear
            key={item.picker}
            picker={item.picker || 'date'}
            format={format}
            showTime={item.showTime}
            className="searchForm-field"
          />
        );
        break;
      case 'radio':
        FormItem = (
          <Radio.Group
            defaultValue={
              initialValues && initialValues[item.name] ? initialValues[item.name] : null
            }
          >
            {renderRadio(item.options)}
          </Radio.Group>
        );
        break;
      case 'treeSelect':
        tProps = {
          allowClear: true,
          treeData: item.treeData,
          showCheckedStrategy: SHOW_PARENT,
          placeholder: item.placeholder,
        };
        FormItem = <TreeSelect {...tProps} className="searchForm-field" />;
        break;
      case 'custTreeSelect':
        FormItem = (
          <CustTreeSelect
            allowClear
            dataServer={item.dataServer}
            transformOptions={item.transformOptions}
            callback={item.callback}
            className="searchForm-field"
            placeholder={item?.placeholder || '请选择'}
          />
        );
        break;
      default:
        break;
    }
    let { name } = item;
    if (item.type === 'rangePicker') {
      timeArr[item.name] = item.timeArr || ['StartTime', 'EndTime'];
      name = `times-${item.name}`;
    } else if (item.type === 'datePicker') {
      name = `time-${item.name}`;
    }

    let formSpan;
    let colSpan;
    if (item.formSpan === false) {
      formSpan = {};
    } else if (typeof item.formSpan !== 'object') {
      formSpan = { span: item.formSpan || 6 };
    } else {
      // eslint-disable-next-line prefer-destructuring
      formSpan = item.formSpan;
    }

    if (typeof item.colSpan !== 'object') {
      colSpan = { span: item.colSpan || 6 };
    } else {
      // eslint-disable-next-line prefer-destructuring
      colSpan = item.colSpan;
    }

    return item.type !== 'inputNumberRange' ? (
      <Col key={item.name} {...colSpan}>
        <Form.Item
          label={item.label}
          name={name}
          rules={Array.isArray(item.rules) ? item.rules : []}
          style={item.style || {}}
          labelCol={{ ...formSpan }}
        >
          {FormItem}
        </Form.Item>
      </Col>
    ) : (
        <Col key={item.name} {...colSpan}>
          <Form.Item label={item.label} labelCol={{ ...formSpan }} style={{ marginBottom: 0 }}>
            <Form.Item
              name={item.names[0]}
              rules={[{ required: false }]}
              style={{ display: 'inline-block' }}
            >
              <InputNumber />
            </Form.Item>
            <span
              style={{
                display: 'inline-block',
                height: '32px',
                lineHeight: '32px',
                margin: '0 8px 0 8px',
              }}
            >
              至
          </span>
            <Form.Item
              name={item.names[1]}
              rules={[{ required: false }]}
              style={{ display: 'inline-block' }}
            >
              <InputNumber />
            </Form.Item>
          </Form.Item>
        </Col>
      );
    // });
  };

  // 渲染表单行
  const renderRow = (list?: any[]) => {
    // eslint-disable-next-line no-undef
    const fieldsArr = Array.isArray(list) ? flatMap(list, (item) => item) : [];

    return fieldsArr.length ? (
      <Row gutter={24}>
        {/* <Row> */}
        {fieldsArr.map((item) => {
          return renderItems(item);
        })}
      </Row>
    ) : null;
  };

  return (
    <div className="search-form">
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout={formLayout}
        onValuesChange={onValuesChange}
      >
        <div className="search-btns btns">
          <Button type="primary" htmlType="submit">
            查询
          </Button>
          <Button onClick={onReset}>重置</Button>
        </div>
        <div className="search-content">{renderRow(options)}</div>
      </Form>
    </div>
  );
};

// StandardForm.defaultValue = {
//   format: 'YYYY-MM-DD HH:mm',
// };

export default StandardForm;
