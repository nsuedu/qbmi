const decimalReg = /^([1-9][0-9]*)(\.[\d]{1,2})?|(0\.[\d]{1,2})$/; // 请输入大于0的整数或两位小数

const regExps = {
  D10001: {
    // 设备名称、制造厂商、物料名称、工艺名称、生产BOM名称、客户名称、供应商名称、承运商名称
    // min: 1,
    max: 50,
    required: false,
    // eslint-disable-next-line no-useless-escape
    pattern: /^[a-zA-Z0-9\u4e00-\u9fa5]{1,50}$/,
    message: '请输入中文、英文、数字，最多50个',
  },
  D10002: {
    // 出厂编码
    // min: 1,
    max: 30,
    // required: false,
    // eslint-disable-next-line no-useless-escape
    pattern: /^[\da-zA-Z!@#$%&,。，\.]{1,30}$/,
    message: '请输入英文、数字、符号',
  },
  D10003: {
    // 型号规格、物料编号、物料清单名称、物料编号/物料名称、异常原因、质检项名称、方案名称、关联物料编号/物料名称
    // 、合同编号、质量要求、车号
    // min: 1,
    max: 30,
    // required: false,
    // eslint-disable-next-line no-useless-escape
    message: '最多输入30个字符',
  },
  D10004: {
    // 设备标签、员工标签、部门标签、位置标签、仓库标签
    // min: 1,
    max: 100,
    // required: false,
    // eslint-disable-next-line no-useless-escape
    pattern: /^([a-zA-Z0-9\u4e00-\u9fa5]+[,|，])*[a-zA-Z0-9\u4e00-\u9fa5]{1,50}$/,
    message: '请输入中文、英文、数字，“，”隔开',
  },
  D10005: {
    // 巡检ID、设备ID
    // min: 1,
    max: 30,
    // required: false,
    // eslint-disable-next-line no-useless-escape
    pattern: /^[a-zA-Z0-9]{1,30}$/,
    message: '请输入英文、数字',
  },
  D10006: {
    // 员工姓名、联系人、司机
    // min: 1,
    max: 30,
    // required: false,
    pattern: /^[A-Za-z.\u4e00-\u9fa5]{1,15}$/,
    message: '请输入中文、英文、”.“,最多30个字符',
  },
  D10007: {
    // 联系电话
    max: 11,
    // required: false,
    // eslint-disable-next-line no-useless-escape
    pattern: /^(1)\d{10}$/,
    message: '请输入11位电话',
  },
  D10008: {
    // 部门名称、角色名称、类型名称、位置名称、仓库名称
    // min: 1,
    max: 10,
    // required: false,
    // eslint-disable-next-line no-useless-escape
    pattern: /^[a-zA-Z0-9\u4e00-\u9fa5]{1,10}$/,
    message: '请输入中文、英文、数字，最多10个',
  },
  D10009: {
    // 规格、工位、选项
    // min: 1,
    max: 20,
    // required: false,
    // eslint-disable-next-line no-useless-escape
    message: '请输入最多20个字符',
  },
  D10010: {
    // 产出数量、调拨数量、盘点数量、合同数量、进厂数量、出厂数量、扣重数量、数量、计划产量
    // min: 0,
    max: 20,
    // required: false,
    // eslint-disable-next-line no-useless-escape
    pattern: decimalReg,
    message: '请输入数字、小数,最多20位',
  },
  D10011: {
    // 物料数量填写规格
    // min: 0,
    max: 9,
    // required: false,
    // eslint-disable-next-line no-useless-escape
    pattern: /^[0-9]/,
    message: '请输入数字',
  },
  D10012: {
    // 异常说明、联系地址、备注
    // min: 0,
    max: 100,
    // required: false,
    // eslint-disable-next-line no-useless-escape
    message: '备注长度不得超过100个字符',
  },
  D10013: {
    // 邮箱
    // min: 0,
    max: 40,
    // required: false,
    // eslint-disable-next-line no-useless-escape
    pattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+/,
    message: '请输入正确的邮箱',
  },
  D10014: {
    // 单位名称
    // min: 0,
    max: 8,
    // required: false,
    // eslint-disable-next-line no-useless-escape
    message: '最多输入8个字符',
  },
  D10015: {
    // 合同金额
    min: 0,
    max: 20,
    // required: false,
    // eslint-disable-next-line no-useless-escape
    pattern: /^(([1-9]{1}\d*)|(0{1}))(\.\d{2})$/,
    message: '请输入中文、英文、”.“',
  },
  D10016: {
    // 合同金额
    min: 0,
    max: 20,
    // required: false,
    // eslint-disable-next-line no-useless-escape
    pattern: /^[0-9a-zA-Z]{8,}$/,
    message: '长度至少8位，包括字母、数字',
  },

  // add by Smallbear
  description_1: {
    max: 512,
    message: '最多只能输入512个字符',
  },
  decimal_amount: {
    pattern: /^([1-9][0-9]*)(\.[\d]+)?|(0\.[\d]+)$/,
    message: '请输入大于0的数字',
  },
  decimal_price: {
    pattern: decimalReg,
    message: '请输入大于0的整数或两位小数',
  },
  uName: {
    pattern: /^[a-zA-Z0-9\u4e00-\u9fa5]{1,50}$/,
    message: '请输入中文、英文、数字，最多50个',
  },
  forwardWhiteSpace: /^\s*/g,
  backwardWhiteSpace: /\s*$/g,
};

const NUMBER = {
  3: {
    // 税率最大值
    max: 100,
    message: '最大值不得超过100',
  },
  6: {
    // 数量最大值
    max: 999999,
    message: '最大值不得超过999999',
  },
  9: {
    // 价格最大值
    max: 999999999.99,
    message: '最大值不得超过999999999.99',
  },
};

interface Ireg {
  validator: (rule: any, value: number | string | null | undefined) => Promise<void>;
  required?: boolean;
  message?: string;
}

const rules = {
  uName: (txt: String, isRequired = true) => {
    const reg: Ireg[] = [
      {
        validator: (rule, value) => {
          if (!value || regExps.uName.pattern.test(value)) {
            return Promise.resolve();
          }
          return Promise.reject(regExps.uName.message);
        },
      },
    ];
    if (isRequired) {
      reg.unshift({ required: true, message: `请输入${txt}` });
    }
    return reg;
  },

  amountNumber: (txt: string, type = 6, isRequired = true) => {
    const regRule = type === 6 ? regExps.decimal_amount : regExps.decimal_price;
    const maxNumber = NUMBER[type];
    const { max, message } = maxNumber;
    const reg = [
      {
        validator: (rule: any, value: number | string | null | undefined) => {
          if (value === undefined || value === '' || value === null) {
            return Promise.resolve();
          }

          if (Number(value) === 0 || !regRule.pattern.test(value)) {
            return Promise.reject(regRule.message);
          }
          if (Number(value) > max) {
            return Promise.reject(message);
          }

          return Promise.resolve();
        },
      },
    ];
    if (isRequired) {
      reg.unshift({ required: true, message: `请输入${txt}` });
    }
    return reg;
  },

  amountPrice(txt: string, isRequired: boolean) {
    return this.amountNumber(txt, 9, isRequired);
  },
};

const RegExps = {
  rules,
  NUMBER,
  regExps,
};

export default RegExps;
