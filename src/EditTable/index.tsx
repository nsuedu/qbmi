import React, {
  useContext,
  useEffect,
  Dispatch,
  //  useState, useRef
} from 'react';
import { Table, Button, Form, Popconfirm } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { PlusOutlined } from '@ant-design/icons';
import './index.less';

let outSave: any;

const transformData = (data: any[] | any) => {
  if (Array.isArray(data)) {
    return data.reduce((prev, next) => {
      prev.push(transformData(next));
      return prev;
    }, []);
  }
  const cleanData = {};
  const entries = Object.entries(data);

  for (const [key, value] of entries) {
    const pureKey = key.replace(/_\[[^"]+\]/g, '');
    cleanData[pureKey] = value;
  }

  // const dataString = JSON.stringify(data);
  // const filterString = dataString.replace(/_\[[^"]+\]"/g, '"');
  // return JSON.parse(filterString);
  return cleanData;
};

interface Actions {
  type: string;
  value: any;
}

interface SidebarProps {
  show: boolean;
  content: JSX.Element | null;
}

interface InitContextProps {
  state: SidebarProps;
  dispatch: Dispatch<Actions>;
}

const EditableContext = React.createContext<any>({} as InitContextProps);

interface Item {
  key: string;
  name: string;
  age: string;
  address: string;
}

interface EditableRowProps {
  index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  const onValuesChange = (val: any) => {
    const keyText = Object.keys(val)[0];
    const key = keyText.split(/[[\]]|[\]]/)[1];
    // const values = form.getFieldValue();
    const values = form.getFieldsValue();
    values.key = key;
    outSave(values);
  };
  return (
    <Form form={form} onValuesChange={onValuesChange} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

interface EditableCellProps {
  index: number;
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: string;
  record: Item;
  rules: [any];
  handleSave: (record: Item) => void;
  render: (record: [any], props: object) => any;
  collectonForm: ({ key, form }: { key?: string; form?: any }) => any;
}

const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  rules,
  render,
  handleSave,
  collectonForm,
  ...restProps
}) => {
  // const [editing, setEditing] = useState(false);
  // const inputRef = useRef();
  const form = useContext(EditableContext);

  // useEffect(() => {
  //   if (editing) {
  //     inputRef.current.focus();
  //   }
  // }, [editing]);

  // useEffect(() => {
  //   if (editing) {
  //     inputRef.current.focus();
  //   }
  // }, [editing]);

  // const toggleEdit = () => {
  //   setEditing(!editing);
  //   form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  // };

  // const save = async e => {
  //   try {
  //     const values = await form.validateFields();

  //     // toggleEdit();
  //     handleSave({ ...record, ...values });
  //   } catch (errInfo) {
  //     console.warn('Save failed:', errInfo);
  //   }
  // };

  let childNode = children;
  if (editable) {
    const name = `${dataIndex}_[${record.key}]`;
    if (collectonForm) {
      collectonForm({
        key: record.key,
        form,
      });
    }

    useEffect(() => {
      if (editable) {
        form.setFieldsValue({ [name]: record[dataIndex] });
      }
    }, []);
    childNode = (
      // editing ? (
      <Form.Item name={name} rules={rules} style={{ margin: 0 }}>
        {/* <Input ref={inputRef} onPressEnter={save} onBlur={save} /> */}
        {/* {render
          ? render(record[dataIndex], record, {
              onBlur: save,
            })
          : children} */}
        {render ? render(record[dataIndex], record) : children}
      </Form.Item>
    );
    // )
    //  : (2
    //   <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
    //     {children}
    //   </div>
    // );
  }

  return <td {...restProps}>{childNode}</td>;
};

interface EditableTableProps {
  columns: any[];
  dataSource: any[];
  dataSourceChange: Function;
  [propName: string]: any;
}
interface EditTableState {
  columns: any[];
  dataSource: any[];
}

class EditableTable extends React.Component<EditableTableProps, EditTableState> {
  static getDerivedStateFromProps(nextProp: any, preState: any) {
    const { columns, dataSource } = nextProp;
    const state: {
      columns?: any;
      dataSource?: any;
    } = {};

    if (columns && columns !== preState.columns) {
      // const assembleColumns = preState.columns.map((item, idx) => {
      //   return Object.assign(item, columns[idx]);
      // });
      state.columns = columns;
      // return {
      //   // columns: assembleColumns,
      //   columns,
      // };
    }
    if (dataSource && dataSource !== preState.dataSource) {
      state.dataSource = dataSource;
    }

    return state;
  }

  forms: any[] = [];

  static defaultProps = {
    isShowAdd: true,
  };

  constructor(props: EditableTableProps) {
    super(props);
    this.state = {
      columns: props.columns,
      dataSource: props.dataSource,
    };
  }

  componentDidMount() {
    outSave = this.handleSave;
  }

  getFormValues() {
    const forms = this.forms.map(item => item.form);
    return Promise.all(
      forms.map(form => {
        return form.validateFields();
      }),
    )
      .then(formsValue => {
        return transformData(formsValue);
        // return formsValue.map(formData => {
        //   const keys = Object.keys(formData);
        //   return keys.reduce((prev, next) => {
        //     const key = next.split('-')[0];
        //     prev[key] = formData[next];
        //     return prev;
        //   }, {});
        // });
      })
      .catch(errors => {
        // eslint-disable-next-line no-console
        console.warn(errors);
        return Promise.reject();
      });
  }

  handleAdd = () => {
    const { dataSourceChange } = this.props;
    const { columns, dataSource } = this.state;

    const transferRow = columns.reduce((prev, next) => {
      prev[next.dataIndex] = undefined;
      return prev;
    }, {});

    const newData = Object.assign(
      {
        key: new Date().getTime().toString(),
      },
      transferRow,
    );

    if (dataSourceChange) {
      dataSourceChange({
        list: [...dataSource, newData],
      });
    }
    // this.setState({
    //   count: count + 1,
    // });
    // eslint-disable-next-line no-plusplus
    // this.count++;
  };

  handleDelete = (key: string) => {
    const { dataSourceChange } = this.props;
    let dataSource = [...this.state.dataSource];
    this.forms = this.forms.filter(item => item.key !== key);

    // this.setState({ dataSource: dataSource.filter(item => item.key !== key) });

    // 同步表单中的数据
    dataSource = dataSource.map(data => {
      const dataClone = { ...data };
      const formItem = this.forms.find(formData => formData.key === dataClone.key);
      if (formItem) {
        const formData = formItem.form.getFieldsValue();
        const transferData = transformData(formData);
        Object.assign(dataClone, transferData);
      }

      return dataClone;
    });
    if (dataSourceChange) {
      dataSourceChange({
        list: dataSource.filter(item => item.key !== key),
      });
    }
  };

  handleSave = (row: { key: string }) => {
    const { dataSourceChange } = this.props;
    const newData = [...this.state.dataSource];
    const dataIndex = newData.findIndex(item => item.key == row.key);
    const item = newData[dataIndex];
    newData.splice(dataIndex, 1, {
      ...item,
      ...transformData(row),
    });

    if (dataSourceChange) {
      dataSourceChange({ list: newData });
    }
  };

  collectonForm = (data: { key: string; form: any }) => {
    const dataForm = this.forms.find(item => {
      return item.key === data.key;
    });

    if (!dataForm) {
      this.forms.push(data);
    } else {
      dataForm.form = data.form;
    }
  };

  render() {
    const { isShowAdd, hasDelete, tableExtraProps = {} } = this.props;
    const { columns, dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };

    const columnsClone = columns.map(column => {
      if (
        typeof column.title === 'string' &&
        column.rules &&
        column.rules.some((rule: { required: boolean }) => rule.required === true)
      ) {
        column.title = (
          <span className="ant-form-item-label">
            <label className="ant-form-item-required">{column.title}</label>
          </span>
        );
      }
      return column;
    });

    if (hasDelete) {
      columnsClone.push({
        title: '操作',
        dataIndex: 'operation',
        width: 100,
        render: (() => {
          if (dataSource.length <= 1) {
            return null;
          }

          if (hasDelete.confirm) {
            return (text: any, record: any) => {
              return (
                <Popconfirm title="确定要删除吗?" onConfirm={() => this.handleDelete(record.key)}>
                  <a className="text-error">删除</a>
                </Popconfirm>
              );
            };
          }
          return (text: any, record: any) => {
            return (
              <a onClick={() => this.handleDelete(record.key)} className="text-error">
                删除
              </a>
            );
          };
        })(),
      });
    }
    const transformColumns = columnsClone.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record: any) => ({
          title: col.title,
          dataIndex: col.dataIndex,
          editable: col.editable,
          rules: col.rules,
          render: col.render,
          handleSave: this.handleSave,
          collectonForm: this.collectonForm,
          record,
        }),
      };
    });

    if (dataSource.length) {
      const keys = dataSource.map(item => item.key);
      this.forms = this.forms.filter(item => keys.includes(item.key));
    }

    return (
      <div className="editable-container">
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          // bordered
          dataSource={dataSource}
          columns={transformColumns}
          pagination={false}
          // scroll={{ y: 260 }}
          {...tableExtraProps}
        />
        {isShowAdd && (
          <Button
            type="dashed"
            icon={<PlusOutlined />}
            onClick={this.handleAdd}
            block
            className="editable-addBtn"
          >
            添加
          </Button>
        )}
      </div>
    );
  }
}

export default EditableTable;
