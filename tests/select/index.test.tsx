import { mount } from 'enzyme';
import React from 'react';
import Select from '../../src/Select';

interface OpType {
  value: string;
  label: string;
}
const testDatas: OpType[] = [{ value: '1', label: '444' }];

describe('Select', () => {
  it('🥩 base use', async () => {
    const html = mount(<Select options={testDatas} />);

    const res = html;

    console.log('-----', res);

    expect(res).toEqual('444');
  });
  it('should show search icon when showSearch and open', () => {
    const wrapper = mount(<Select selectProps={{ showSearch: true }} options={testDatas} />);
    expect(wrapper.find('.anticon-down').length).toBe(1);
    expect(wrapper.find('.anticon-search').length).toBe(0);
  });
});
