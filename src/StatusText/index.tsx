/*
  author:lilin
  入参说明：
    type:状态类型，
    label:文本，
    mode:模式，接受tag和badge，badge左侧小点,tag标签框，默认badge
  状态说明:
  success: 已完成（正常结束）,
  error: 已终止（一场结束）,
  muted: 未开始、已创建（未进入流程）,
  processing: 已开始、正常流程中,
  warning: 被退回，已撤回（进行中的异常情况）,
*/

import React from 'react';
import { Badge, Tag } from 'antd';
import PropTypes from 'prop-types';

interface Iprops {
  type?: 'muted' | 'default' | 'success' | 'processing' | 'error' | 'warning' | undefined;
  label: string;
  mode?: string;
}

class StatusText extends React.Component<Iprops> {
  static propTypes: {
    type: PropTypes.Validator<string>;
    label: PropTypes.Validator<string>;
    mode: PropTypes.Requireable<string>;
  };

  static defaultProps: { mode: string };

  constructor(props: Iprops) {
    super(props);
    this.state = {};
  }

  render() {
    const { type, label, mode } = this.props;
    if (mode === 'tag') {
      return <Tag color={type === 'muted' ? 'default' : type}>{label}</Tag>;
    }
    return <Badge status={type === 'muted' ? 'default' : type} text={label || ''} />;
  }
}

StatusText.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  mode: PropTypes.string,
};
StatusText.defaultProps = {
  mode: 'badge',
};
export default StatusText;
