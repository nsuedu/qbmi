import React from 'react';
import { Button } from 'antd';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Wallet', () => {
  const wallet = mount(<Button>test</Button>);

  it('renders properly', () => {
    expect(wallet).toMatchSnapshot();
  });

  it('display the balance from props', () => {
    expect(wallet.find('.ant-btn').text()).toEqual('test');
  });
});
