// eslint-disable-next-line import/no-extraneous-dependencies
import { isNumber } from 'lodash';

// eslint-disable-next-line consistent-return
export default function tranNumber(num, point) {
  if (!(num && isNumber(num))) {
    return 0;
  }

  // 将数字转换为字符串,然后通过split方法用.分隔,取到第0个
  const numArr = `${num}`.split('.');
  const numStr = numArr[0];
  if (numStr.length < 6) {
    // 判断数字有多长,如果小于6,,表示10万以内的数字,让其直接显示
    return num;
  }
  if (numStr.length >= 6 && numStr.length <= 8) {
    // 如果数字大于6位,小于8位,让其数字后面加单位万
    const decimal = numStr.substring(numStr.length - 4, numStr.length - 4 + point);
    // 由千位,百位组成的一个数字
    // eslint-disable-next-line radix
    return `${parseFloat(`${parseInt(num / 10000)}.${decimal}`)}万`;
  }
  if (numStr.length > 8) {
    // 如果数字大于8位,让其数字后面加单位亿
    const decimal = numStr.substring(numStr.length - 8, numStr.length - 8 + point);
    // eslint-disable-next-line radix
    return `${parseFloat(`${parseInt(num / 100000000)}.${decimal}`)}亿`;
  }
}
