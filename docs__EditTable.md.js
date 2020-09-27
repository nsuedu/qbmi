(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24,14],{"6UCC":function(e,t,a){},"7bZV":function(e,t,a){"use strict";const n=/^([1-9][0-9]*)(\.[\d]{1,2})?|(0\.[\d]{1,2})$/,r={D10001:{max:50,required:!1,pattern:/^[a-zA-Z0-9\u4e00-\u9fa5]{1,50}$/,message:"\u8bf7\u8f93\u5165\u4e2d\u6587\u3001\u82f1\u6587\u3001\u6570\u5b57\uff0c\u6700\u591a50\u4e2a"},D10002:{max:30,pattern:/^[\da-zA-Z!@#$%&,\u3002\uff0c\.]{1,30}$/,message:"\u8bf7\u8f93\u5165\u82f1\u6587\u3001\u6570\u5b57\u3001\u7b26\u53f7"},D10003:{max:30,message:"\u6700\u591a\u8f93\u516530\u4e2a\u5b57\u7b26"},D10004:{max:100,pattern:/^([a-zA-Z0-9\u4e00-\u9fa5]+[,|\uff0c])*[a-zA-Z0-9\u4e00-\u9fa5]{1,50}$/,message:"\u8bf7\u8f93\u5165\u4e2d\u6587\u3001\u82f1\u6587\u3001\u6570\u5b57\uff0c\u201c\uff0c\u201d\u9694\u5f00"},D10005:{max:30,pattern:/^[a-zA-Z0-9]{1,30}$/,message:"\u8bf7\u8f93\u5165\u82f1\u6587\u3001\u6570\u5b57"},D10006:{max:30,pattern:/^[A-Za-z.\u4e00-\u9fa5]{1,15}$/,message:"\u8bf7\u8f93\u5165\u4e2d\u6587\u3001\u82f1\u6587\u3001\u201d.\u201c,\u6700\u591a30\u4e2a\u5b57\u7b26"},D10007:{max:11,pattern:/^(1)\d{10}$/,message:"\u8bf7\u8f93\u516511\u4f4d\u7535\u8bdd"},D10008:{max:10,pattern:/^[a-zA-Z0-9\u4e00-\u9fa5]{1,10}$/,message:"\u8bf7\u8f93\u5165\u4e2d\u6587\u3001\u82f1\u6587\u3001\u6570\u5b57\uff0c\u6700\u591a10\u4e2a"},D10009:{max:20,message:"\u8bf7\u8f93\u5165\u6700\u591a20\u4e2a\u5b57\u7b26"},D10010:{max:20,pattern:n,message:"\u8bf7\u8f93\u5165\u6570\u5b57\u3001\u5c0f\u6570,\u6700\u591a20\u4f4d"},D10011:{max:9,pattern:/^[0-9]/,message:"\u8bf7\u8f93\u5165\u6570\u5b57"},D10012:{max:100,message:"\u5907\u6ce8\u957f\u5ea6\u4e0d\u5f97\u8d85\u8fc7100\u4e2a\u5b57\u7b26"},D10013:{max:40,pattern:/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+/,message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1"},D10014:{max:8,message:"\u6700\u591a\u8f93\u51658\u4e2a\u5b57\u7b26"},D10015:{min:0,max:20,pattern:/^(([1-9]{1}\d*)|(0{1}))(\.\d{2})$/,message:"\u8bf7\u8f93\u5165\u4e2d\u6587\u3001\u82f1\u6587\u3001\u201d.\u201c"},D10016:{min:0,max:20,pattern:/^[0-9a-zA-Z]{8,}$/,message:"\u957f\u5ea6\u81f3\u5c118\u4f4d\uff0c\u5305\u62ec\u5b57\u6bcd\u3001\u6570\u5b57"},description_1:{max:512,message:"\u6700\u591a\u53ea\u80fd\u8f93\u5165512\u4e2a\u5b57\u7b26"},decimal_amount:{pattern:/^([1-9][0-9]*)(\.[\d]+)?|(0\.[\d]+)$/,message:"\u8bf7\u8f93\u5165\u5927\u4e8e0\u7684\u6570\u5b57"},decimal_price:{pattern:n,message:"\u8bf7\u8f93\u5165\u5927\u4e8e0\u7684\u6574\u6570\u6216\u4e24\u4f4d\u5c0f\u6570"},uName:{pattern:/^[a-zA-Z0-9\u4e00-\u9fa5]{1,50}$/,message:"\u8bf7\u8f93\u5165\u4e2d\u6587\u3001\u82f1\u6587\u3001\u6570\u5b57\uff0c\u6700\u591a50\u4e2a"},forwardWhiteSpace:/^\s*/g,backwardWhiteSpace:/\s*$/g},l={3:{max:100,message:"\u6700\u5927\u503c\u4e0d\u5f97\u8d85\u8fc7100"},6:{max:999999,message:"\u6700\u5927\u503c\u4e0d\u5f97\u8d85\u8fc7999999"},9:{max:999999999.99,message:"\u6700\u5927\u503c\u4e0d\u5f97\u8d85\u8fc7999999999.99"}},s={uName:(e,t=!0)=>{const a=[{validator:(e,t)=>!t||r.uName.pattern.test(t)?Promise.resolve():Promise.reject(r.uName.message)}];return t&&a.unshift({required:!0,message:"\u8bf7\u8f93\u5165"+e}),a},amountNumber:(e,t=6,a=!0)=>{const n=6===t?r.decimal_amount:r.decimal_price,s=l[t],c=s.max,i=s.message,m=[{validator:(e,t)=>void 0===t||""===t||null===t?Promise.resolve():0!==Number(t)&&n.pattern.test(t)?Number(t)>c?Promise.reject(i):Promise.resolve():Promise.reject(n.message)}];return a&&m.unshift({required:!0,message:"\u8bf7\u8f93\u5165"+e}),m},amountPrice(e,t){return this.amountNumber(e,9,t)}},c={rules:s,NUMBER:l,regExps:r};t["a"]=c},"H+Z4":function(e,t,a){"use strict";a.r(t);var n=a("0Owb"),r=a("cDcd"),l=a.n(r),s=(a("B2uJ"),a("+su7"),a("qOys"),a("5Yjd")),c=a.n(s);const i=l.a.memo((function(){var e=a("K+nK"),t=e(a("cDcd")),n=e(a("SL+x")),r=function(){return t.default.createElement(n.default,null)};return t["default"].createElement(r)}));t["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"edittable"},l.a.createElement("a",{"aria-hidden":"true",href:"#edittable"},l.a.createElement("span",{className:"icon icon-link"})),"EditTable")),l.a.createElement(c.a,Object(n["a"])({source:{jsx:"import React, { Component } from 'react';\nimport { Input } from 'antd';\nimport _ from 'lodash';\nimport { DecimalInput, EditTable } from 'qbmi';\n\nconst { InputNumber } = DecimalInput;\n\nclass MaterialTableAdd extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      materialList: [],\n    };\n  }\n\n  dataSourceChange = ({ list }) => {\n    this.setState({\n      materialList: list,\n    });\n  };\n\n  render() {\n    const { materialList } = this.state;\n    // \u5217\u8868\u6570\u636e\n    const columns = [\n      {\n        title: '\u6570\u91cf',\n        dataIndex: 'purchaseNumber',\n        editable: true,\n        rules: [{ required: true, message: '\u8bf7\u8f93\u5165' }],\n        width: 255,\n        render: (txt, record) => (\n          <InputNumber\n            placeholder=\"\u8bf7\u8f93\u5165\u6570\u91cf\"\n            disabled={Boolean(record.id)}\n            suffix={record.unitName}\n            style={{ width: '80%' }}\n          />\n        ),\n      },\n      {\n        title: '\u5355\u4ef7',\n        dataIndex: 'price',\n        editable: true,\n        rules: [{ required: true, message: '\u8bf7\u8f93\u5165' }],\n        width: 255,\n        render: () => <InputNumber placeholder=\"\u8bf7\u8f93\u5165\u5355\u4ef7\" precision={2} min={0.1} suffix=\"\u5143\" />,\n      },\n      {\n        title: '\u5907\u6ce8',\n        dataIndex: 'description',\n        editable: true,\n        width: 200,\n        render: (text, record) => (\n          <Input allowClear maxLength={100} placeholder=\"\u8bf7\u8f93\u5165\u5907\u6ce8\" disabled={record.id} />\n        ),\n      },\n    ];\n\n    return (\n      <EditTable\n        ref={e => (this.editTable = e)}\n        rowKey={() => Math.random().toFixed(20)}\n        hasDelete\n        columns={columns}\n        dataSource={materialList}\n        dataSourceChange={this.dataSourceChange}\n        pagination={false}\n      />\n    );\n  }\n}\n\nexport default MaterialTableAdd;\n"}},{path:"/_demos/edit-table",CSSInDependencies:["antd/dist/antd.css"],dependencies:{antd:"4.6.6",lodash:"4.17.20",qbmi:"0.0.20"},files:{}}),l.a.createElement(i,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement("a",{"aria-hidden":"true",href:"#api"},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u6210\u5458"),l.a.createElement("th",null,"\u89e3\u91ca"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"ref"),l.a.createElement("td",null,"\u83b7\u53d6\u5f53\u524d\u8282\u70b9"),l.a.createElement("td",null,"------"),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"rowKey"),l.a.createElement("td",null,"\u6bcf\u4e00\u884c\u7684\u552f\u4e00 key."),l.a.createElement("td",null,"------"),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"hasDelete"),l.a.createElement("td",null,"\u662f\u5426\u652f\u6301\u5220\u9664\u884c\u7684\u64cd\u4f5c."),l.a.createElement("td",null,"boolean"),l.a.createElement("td",null,"true")),l.a.createElement("tr",null,l.a.createElement("td",null,"columns"),l.a.createElement("td",null,"\u5b9a\u4e49\u8868\u5934\u4ee5\u53ca\u5b9a\u4e49\u5217\u5c55\u793a\u7684\u5185\u5bb9\uff0c\u5177\u4f53\u53c2\u8003",l.a.createElement("a",{href:"https://ant.design/components/table-cn/#Column",target:"_blank",rel:"noopener noreferrer"},"https://ant.design/components/table-cn/#Column",l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},l.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))),"."),l.a.createElement("td",null,"array"),l.a.createElement("td",null,"[]")),l.a.createElement("tr",null,l.a.createElement("td",null,"dataSource"),l.a.createElement("td",null,"\u8868\u683c\u5185\u5bb9\u6570\u636e\u6e90."),l.a.createElement("td",null,"array"),l.a.createElement("td",null,"[]")),l.a.createElement("tr",null,l.a.createElement("td",null,"dataSourceChange"),l.a.createElement("td",null,"\u8868\u683c\u6570\u636e\u53d1\u751f\u53d8\u5316\u7684\u56de\u8c03\u51fd\u6570\uff0c\u8fd4\u56de\u53d8\u5316\u4e4b\u540e\u7684 dataSource."),l.a.createElement("td",null,"array"),l.a.createElement("td",null,"[]")),l.a.createElement("tr",null,l.a.createElement("td",null,"pagination"),l.a.createElement("td",null,"\u5206\u9875\u5668\uff0c\u4e0e antd \u4e00\u81f4\uff0c\u5177\u4f53\u53c2\u8003",l.a.createElement("a",{href:"https://ant.design/components/pagination-cn/#API",target:"_blank",rel:"noopener noreferrer"},"https://ant.design/components/pagination-cn/#API",l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},l.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))),"."),l.a.createElement("td",null,"-------"),l.a.createElement("td",null,"---"))))))}},KTev:function(e,t,a){"use strict";var n=a("0Owb"),r=a("PpiC"),l=a("cDcd"),s=a.n(l),c=(a("giR+"),a("fyUT")),i=a("tJVT"),m=a("7bZV");const o=m["a"].NUMBER,d=e=>{const t=e.decimal,a=void 0===t?2:t,m=(e.dispatch,e.value),d=e.onChange,u=Object(r["a"])(e,["decimal","dispatch","value","onChange"]),p=Object(l["useState"])(.1),h=Object(i["a"])(p,2),f=h[0],E=h[1],g=()=>{let e="0.";if(0===a)E(0);else{for(let t=1;t<a;t+=1)e+="0";e+="1",E(parseFloat(e))}};Object(l["useEffect"])(()=>{g()},[]);const b=e=>{if(!e&&0!==e)return"";let t=String(e);return Number(t)<1&&t.indexOf("-")>=0&&t.indexOf("e")>-1&&(t="0"+String(Number(t)+1).substr(1)),t},x=e=>{d&&d(b(e))};return s.a.createElement(s.a.Fragment,null,s.a.createElement(c["a"],Object(n["a"])({value:m,min:0,max:o["6"].max,step:f,precision:a,formatter:b,onChange:x,style:{width:"100%"}},u,{className:"searchForm-field"})))};var u=d,p=(a("5NDa"),a("5rEg"));const h=m["a"].NUMBER,f={amount:6,price:9},E=e=>{const t=e.decimal,a=e.priceDecimal,c=e.precisionType,m=void 0===c?"amount":c,o=e.precision,d=e.value,u=e.min,E=void 0===u?0:u,g=e.onBlur,b=Object(r["a"])(e,["decimal","priceDecimal","precisionType","precision","value","min","onBlur"]),x=Object(l["useState"])(d),v=Object(i["a"])(x,2),w=v[0],y=v[1],S="price"===m?a:void 0!==o?o:t,C=h[f[m]].max;Object(l["useEffect"])(()=>{y(d)},[d]);const N=t=>{const a=e.onChange,n=t.target.value;if(n){const e=Math.min(Number(n),C).toFixed(S);y(e),a&&a(e),g&&g(t)}};return s.a.createElement(s.a.Fragment,null,s.a.createElement(p["a"],Object(n["a"])({type:"number",value:w,min:E,max:C,onBlur:N,style:{width:"100%"}},b,{className:"searchForm-field"})))};var g=E;const b=e=>{const t=e.prefix,a=void 0===t?"":t,l=e.suffix,c=void 0===l?"":l,i=Object(r["a"])(e,["prefix","suffix"]);return s.a.createElement(s.a.Fragment,null,void 0!==c||void 0!==a?s.a.createElement(g,Object(n["a"])({suffix:c,prefix:a},i)):s.a.createElement(u,i))};var x=b;const v={3:{max:100,message:"\u6700\u5927\u503c\u4e0d\u5f97\u8d85\u8fc7100"},6:{max:999999,message:"\u6700\u5927\u503c\u4e0d\u5f97\u8d85\u8fc7999999"},9:{max:999999999.99,message:"\u6700\u5927\u503c\u4e0d\u5f97\u8d85\u8fc7999999999.99"}},w=e=>{const t=e.decimal,a=void 0===t?2:t,m=e.value,o=Object(r["a"])(e,["decimal","value"]),d=Object(l["useState"])(.1),u=Object(i["a"])(d,2),p=u[0],h=u[1],f=()=>{let e="0.";if(0===a)h(0);else{for(let t=1;t<a;t+=1)e+="0";e+="1",h(parseFloat(e))}};return Object(l["useEffect"])(()=>{f()},[]),s.a.createElement(c["a"],Object(n["a"])({value:m,min:0,max:v["9"].max,step:p,precision:a,style:{width:"100%"}},o,{className:"searchForm-field"}))};var y=w;const S=e=>{const t=e.value,a=e.decimalType,n=void 0===a?"price":a,r=e.special,l=e.showUnit,c=void 0===l||l,i=parseFloat(""+t).toFixed(e[n]);return"price"===n&&c?s.a.createElement("span",{className:"text-moneySign "+(r?" text-price":"")},i):s.a.createElement("span",null,i)};var C=S;const N={InputNumber:x,DecimalAmount:u,DecimalAmountUnit:g,DecimalPrice:y,DecimalText:C};t["a"]=N},"SL+x":function(e,t,a){"use strict";a.r(t);a("5NDa");var n=a("5rEg"),r=a("cDcd"),l=a.n(r),s=(a("LvDl"),a("KTev")),c=(a("+L6B"),a("2/Rp")),i=(a("g9YV"),a("wCAj")),m=a("0Owb"),o=(a("P2fV"),a("NJEC")),d=(a("y8nQ"),a("Vl3Y")),u=a("tJVT"),p=a("xvlK");a("6UCC");let h;const f=e=>{if(Array.isArray(e))return e.reduce((e,t)=>(e.push(f(t)),e),[]);const t={},a=Object.entries(e);for(const r of a){var n=Object(u["a"])(r,2);const e=n[0],a=n[1],l=e.replace(/_\[[^"]+\]/g,"");t[l]=a}return t},E=l.a.createContext({}),g=({index:e,...t})=>{const a=d["a"].useForm(),n=Object(u["a"])(a,1),r=n[0],s=e=>{const t=Object.keys(e)[0],a=t.split(/[[\]]|[\]]/)[1],n=r.getFieldsValue();n.key=a,h(n)};return l.a.createElement(d["a"],{form:r,onValuesChange:s,component:!1},l.a.createElement(E.Provider,{value:r},l.a.createElement("tr",t)))},b=({title:e,editable:t,children:a,dataIndex:n,record:s,rules:c,render:i,handleSave:m,collectonForm:o,...u})=>{const p=Object(r["useContext"])(E);let h=a;if(t){const e=`${n}_[${s.key}]`;o&&o({key:s.key,form:p}),Object(r["useEffect"])(()=>{t&&p.setFieldsValue({[e]:s[n]})},[]),h=l.a.createElement(d["a"].Item,{name:e,rules:c,style:{margin:0}},i?i(s[n],s):a)}return l.a.createElement("td",u,h)};class x extends l.a.Component{static getDerivedStateFromProps(e,t){const a=e.columns,n=e.dataSource,r={};return a&&a!==t.columns&&(r.columns=a),n&&n!==t.dataSource&&(r.dataSource=n),r}constructor(e){super(e),this.forms=[],this.handleAdd=()=>{const e=this.props.dataSourceChange,t=this.state,a=t.columns,n=t.dataSource,r=a.reduce((e,t)=>(e[t.dataIndex]=void 0,e),{}),l=Object.assign({key:(new Date).getTime().toString()},r);e&&e({list:[...n,l]})},this.handleDelete=e=>{const t=this.props.dataSourceChange;let a=[...this.state.dataSource];this.forms=this.forms.filter(t=>t.key!==e),a=a.map(e=>{const t={...e},a=this.forms.find(e=>e.key===t.key);if(a){const e=a.form.getFieldsValue(),n=f(e);Object.assign(t,n)}return t}),t&&t({list:a.filter(t=>t.key!==e)})},this.handleSave=e=>{const t=this.props.dataSourceChange,a=[...this.state.dataSource],n=a.findIndex(t=>t.key==e.key),r=a[n];a.splice(n,1,{...r,...f(e)}),t&&t({list:a})},this.collectonForm=e=>{const t=this.forms.find(t=>t.key===e.key);t?t.form=e.form:this.forms.push(e)},this.state={columns:e.columns,dataSource:e.dataSource}}componentDidMount(){h=this.handleSave}getFormValues(){const e=this.forms.map(e=>e.form);return Promise.all(e.map(e=>e.validateFields())).then(e=>f(e)).catch(e=>(console.warn(e),Promise.reject()))}render(){const e=this.props,t=e.isShowAdd,a=e.hasDelete,n=e.tableExtraProps,r=void 0===n?{}:n,s=this.state,d=s.columns,u=s.dataSource,h={body:{row:g,cell:b}},f=d.map(e=>("string"===typeof e.title&&e.rules&&e.rules.some(e=>!0===e.required)&&(e.title=l.a.createElement("span",{className:"ant-form-item-label"},l.a.createElement("label",{className:"ant-form-item-required"},e.title))),e));a&&f.push({title:"\u64cd\u4f5c",dataIndex:"operation",width:100,render:(()=>u.length<=1?null:a.confirm?(e,t)=>l.a.createElement(o["a"],{title:"\u786e\u5b9a\u8981\u5220\u9664\u5417?",onConfirm:()=>this.handleDelete(t.key)},l.a.createElement("a",{className:"text-error"},"\u5220\u9664")):(e,t)=>l.a.createElement("a",{onClick:()=>this.handleDelete(t.key),className:"text-error"},"\u5220\u9664"))()});const E=f.map(e=>e.editable?{...e,onCell:t=>({title:e.title,dataIndex:e.dataIndex,editable:e.editable,rules:e.rules,render:e.render,handleSave:this.handleSave,collectonForm:this.collectonForm,record:t})}:e);if(u.length){const e=u.map(e=>e.key);this.forms=this.forms.filter(t=>e.includes(t.key))}return l.a.createElement("div",{className:"editable-container"},l.a.createElement(i["a"],Object(m["a"])({components:h,rowClassName:()=>"editable-row",dataSource:u,columns:E,pagination:!1},r)),t&&l.a.createElement(c["a"],{type:"dashed",icon:l.a.createElement(p["a"],null),onClick:this.handleAdd,block:!0,className:"editable-addBtn"},"\u6dfb\u52a0"))}}x.defaultProps={isShowAdd:!0};var v=x;const w=s["a"].InputNumber;class y extends r["Component"]{constructor(e){super(e),this.dataSourceChange=({list:e})=>{this.setState({materialList:e})},this.state={materialList:[]}}render(){const e=this.state.materialList,t=[{title:"\u6570\u91cf",dataIndex:"purchaseNumber",editable:!0,rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}],width:255,render:(e,t)=>l.a.createElement(w,{placeholder:"\u8bf7\u8f93\u5165\u6570\u91cf",disabled:Boolean(t.id),suffix:t.unitName,style:{width:"80%"}})},{title:"\u5355\u4ef7",dataIndex:"price",editable:!0,rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}],width:255,render:()=>l.a.createElement(w,{placeholder:"\u8bf7\u8f93\u5165\u5355\u4ef7",precision:2,min:.1,suffix:"\u5143"})},{title:"\u5907\u6ce8",dataIndex:"description",editable:!0,width:200,render:(e,t)=>l.a.createElement(n["a"],{allowClear:!0,maxLength:100,placeholder:"\u8bf7\u8f93\u5165\u5907\u6ce8",disabled:t.id})}];return l.a.createElement(v,{ref:e=>this.editTable=e,rowKey:()=>Math.random().toFixed(20),hasDelete:!0,columns:t,dataSource:e,dataSourceChange:this.dataSourceChange,pagination:!1})}}t["default"]=y}}]);