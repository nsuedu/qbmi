import "antd/es/button/style";
import _Button from "antd/es/button";
import "antd/es/table/style";
import _Table from "antd/es/table";
import "antd/es/popconfirm/style";
import _Popconfirm from "antd/es/popconfirm";
import "antd/es/form/style";
import _Form from "antd/es/form";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useContext, useEffect //  useState, useRef
} from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { PlusOutlined } from '@ant-design/icons';
import './index.less';
var outSave;

var transformData = function transformData(data) {
  if (Array.isArray(data)) {
    return data.reduce(function (prev, next) {
      prev.push(transformData(next));
      return prev;
    }, []);
  }

  var cleanData = {};
  var entries = Object.entries(data);

  for (var _i = 0, _entries = entries; _i < _entries.length; _i++) {
    var _entries$_i = _slicedToArray(_entries[_i], 2),
        key = _entries$_i[0],
        value = _entries$_i[1];

    var pureKey = key.replace(/_\[[^"]+\]/g, '');
    cleanData[pureKey] = value;
  } // const dataString = JSON.stringify(data);
  // const filterString = dataString.replace(/_\[[^"]+\]"/g, '"');
  // return JSON.parse(filterString);


  return cleanData;
};

var EditableContext = React.createContext({});

var EditableRow = function EditableRow(_ref) {
  var index = _ref.index,
      props = _objectWithoutProperties(_ref, ["index"]);

  var _Form$useForm = _Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var onValuesChange = function onValuesChange(val) {
    var keyText = Object.keys(val)[0];
    var key = keyText.split(/[[\]]|[\]]/)[1]; // const values = form.getFieldValue();

    var values = form.getFieldsValue();
    values.key = key;
    outSave(values);
  };

  return /*#__PURE__*/React.createElement(_Form, {
    form: form,
    onValuesChange: onValuesChange,
    component: false
  }, /*#__PURE__*/React.createElement(EditableContext.Provider, {
    value: form
  }, /*#__PURE__*/React.createElement("tr", props)));
};

var EditableCell = function EditableCell(_ref2) {
  var title = _ref2.title,
      editable = _ref2.editable,
      children = _ref2.children,
      dataIndex = _ref2.dataIndex,
      record = _ref2.record,
      rules = _ref2.rules,
      render = _ref2.render,
      handleSave = _ref2.handleSave,
      collectonForm = _ref2.collectonForm,
      restProps = _objectWithoutProperties(_ref2, ["title", "editable", "children", "dataIndex", "record", "rules", "render", "handleSave", "collectonForm"]);

  // const [editing, setEditing] = useState(false);
  // const inputRef = useRef();
  var form = useContext(EditableContext); // useEffect(() => {
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

  var childNode = children;

  if (editable) {
    var name = "".concat(dataIndex, "_[").concat(record.key, "]");

    if (collectonForm) {
      collectonForm({
        key: record.key,
        form: form
      });
    }

    useEffect(function () {
      if (editable) {
        form.setFieldsValue(_defineProperty({}, name, record[dataIndex]));
      }
    }, []);
    childNode =
    /*#__PURE__*/
    // editing ? (
    React.createElement(_Form.Item, {
      name: name,
      rules: rules,
      style: {
        margin: 0
      }
    }, render ? render(record[dataIndex], record) : children); // )
    //  : (2
    //   <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
    //     {children}
    //   </div>
    // );
  }

  return /*#__PURE__*/React.createElement("td", restProps, childNode);
};

var EditableTable = /*#__PURE__*/function (_React$Component) {
  _inherits(EditableTable, _React$Component);

  var _super = _createSuper(EditableTable);

  _createClass(EditableTable, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProp, preState) {
      var columns = nextProp.columns,
          dataSource = nextProp.dataSource;
      var state = {};

      if (columns && columns !== preState.columns) {
        // const assembleColumns = preState.columns.map((item, idx) => {
        //   return Object.assign(item, columns[idx]);
        // });
        state.columns = columns; // return {
        //   // columns: assembleColumns,
        //   columns,
        // };
      }

      if (dataSource && dataSource !== preState.dataSource) {
        state.dataSource = dataSource;
      }

      return state;
    }
  }]);

  function EditableTable(props) {
    var _this;

    _classCallCheck(this, EditableTable);

    _this = _super.call(this, props);
    _this.forms = [];

    _this.handleAdd = function () {
      var dataSourceChange = _this.props.dataSourceChange;
      var _this$state = _this.state,
          columns = _this$state.columns,
          dataSource = _this$state.dataSource;
      var transferRow = columns.reduce(function (prev, next) {
        prev[next.dataIndex] = undefined;
        return prev;
      }, {});
      var newData = Object.assign({
        key: new Date().getTime().toString()
      }, transferRow);

      if (dataSourceChange) {
        dataSourceChange({
          list: [].concat(_toConsumableArray(dataSource), [newData])
        });
      } // this.setState({
      //   count: count + 1,
      // });
      // eslint-disable-next-line no-plusplus
      // this.count++;

    };

    _this.handleDelete = function (key) {
      var dataSourceChange = _this.props.dataSourceChange;

      var dataSource = _toConsumableArray(_this.state.dataSource);

      _this.forms = _this.forms.filter(function (item) {
        return item.key !== key;
      }); // this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
      // 同步表单中的数据

      dataSource = dataSource.map(function (data) {
        var dataClone = _objectSpread({}, data);

        var formItem = _this.forms.find(function (formData) {
          return formData.key === dataClone.key;
        });

        if (formItem) {
          var formData = formItem.form.getFieldsValue();
          var transferData = transformData(formData);
          Object.assign(dataClone, transferData);
        }

        return dataClone;
      });

      if (dataSourceChange) {
        dataSourceChange({
          list: dataSource.filter(function (item) {
            return item.key !== key;
          })
        });
      }
    };

    _this.handleSave = function (row) {
      var dataSourceChange = _this.props.dataSourceChange;

      var newData = _toConsumableArray(_this.state.dataSource);

      var dataIndex = newData.findIndex(function (item) {
        return item.key == row.key;
      });
      var item = newData[dataIndex];
      newData.splice(dataIndex, 1, _objectSpread(_objectSpread({}, item), transformData(row)));

      if (dataSourceChange) {
        dataSourceChange({
          list: newData
        });
      }
    };

    _this.collectonForm = function (data) {
      var dataForm = _this.forms.find(function (item) {
        return item.key === data.key;
      });

      if (!dataForm) {
        _this.forms.push(data);
      } else {
        dataForm.form = data.form;
      }
    };

    _this.state = {
      columns: props.columns,
      dataSource: props.dataSource
    };
    return _this;
  }

  _createClass(EditableTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      outSave = this.handleSave;
    }
  }, {
    key: "getFormValues",
    value: function getFormValues() {
      var forms = this.forms.map(function (item) {
        return item.form;
      });
      return Promise.all(forms.map(function (form) {
        return form.validateFields();
      })).then(function (formsValue) {
        return transformData(formsValue); // return formsValue.map(formData => {
        //   const keys = Object.keys(formData);
        //   return keys.reduce((prev, next) => {
        //     const key = next.split('-')[0];
        //     prev[key] = formData[next];
        //     return prev;
        //   }, {});
        // });
      }).catch(function (errors) {
        // eslint-disable-next-line no-console
        console.warn(errors);
        return Promise.reject();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          isShowAdd = _this$props.isShowAdd,
          hasDelete = _this$props.hasDelete,
          _this$props$tableExtr = _this$props.tableExtraProps,
          tableExtraProps = _this$props$tableExtr === void 0 ? {} : _this$props$tableExtr;
      var _this$state2 = this.state,
          columns = _this$state2.columns,
          dataSource = _this$state2.dataSource;
      var components = {
        body: {
          row: EditableRow,
          cell: EditableCell
        }
      };
      var columnsClone = columns.map(function (column) {
        if (typeof column.title === 'string' && column.rules && column.rules.some(function (rule) {
          return rule.required === true;
        })) {
          column.title = /*#__PURE__*/React.createElement("span", {
            className: "ant-form-item-label"
          }, /*#__PURE__*/React.createElement("label", {
            className: "ant-form-item-required"
          }, column.title));
        }

        return column;
      });

      if (hasDelete) {
        columnsClone.push({
          title: '操作',
          dataIndex: 'operation',
          width: 100,
          render: function () {
            if (dataSource.length <= 1) {
              return null;
            }

            if (hasDelete.confirm) {
              return function (text, record) {
                return /*#__PURE__*/React.createElement(_Popconfirm, {
                  title: "\u786E\u5B9A\u8981\u5220\u9664\u5417?",
                  onConfirm: function onConfirm() {
                    return _this2.handleDelete(record.key);
                  }
                }, /*#__PURE__*/React.createElement("a", {
                  className: "text-error"
                }, "\u5220\u9664"));
              };
            }

            return function (text, record) {
              return /*#__PURE__*/React.createElement("a", {
                onClick: function onClick() {
                  return _this2.handleDelete(record.key);
                },
                className: "text-error"
              }, "\u5220\u9664");
            };
          }()
        });
      }

      var transformColumns = columnsClone.map(function (col) {
        if (!col.editable) {
          return col;
        }

        return _objectSpread(_objectSpread({}, col), {}, {
          onCell: function onCell(record) {
            return {
              title: col.title,
              dataIndex: col.dataIndex,
              editable: col.editable,
              rules: col.rules,
              render: col.render,
              handleSave: _this2.handleSave,
              collectonForm: _this2.collectonForm,
              record: record
            };
          }
        });
      });

      if (dataSource.length) {
        var keys = dataSource.map(function (item) {
          return item.key;
        });
        this.forms = this.forms.filter(function (item) {
          return keys.includes(item.key);
        });
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "editable-container"
      }, /*#__PURE__*/React.createElement(_Table, _extends({
        components: components,
        rowClassName: function rowClassName() {
          return 'editable-row';
        } // bordered
        ,
        dataSource: dataSource,
        columns: transformColumns,
        pagination: false // scroll={{ y: 260 }}

      }, tableExtraProps)), isShowAdd && /*#__PURE__*/React.createElement(_Button, {
        type: "dashed",
        icon: /*#__PURE__*/React.createElement(PlusOutlined, null),
        onClick: this.handleAdd,
        block: true,
        className: "editable-addBtn"
      }, "\u6DFB\u52A0"));
    }
  }]);

  return EditableTable;
}(React.Component);

EditableTable.defaultProps = {
  isShowAdd: true
};
export default EditableTable;