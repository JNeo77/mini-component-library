/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--borderRadius': 4 + 'px',
    '--barHeight': 8 + 'px',
    '--height': 8 + 'px'
  },
  medium: {
    '--borderRadius': 4 + 'px',
    '--barHeight': 12 + 'px',
    '--height': 12 + 'px'
  },
  large: {
    '--borderRadius': 8 + 'px',
    '--height': 24 + 'px',
    '--barHeight': 16 + 'px',
    '--padding': 4 + 'px'
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size]
  return <Wrapper style={styles} value={value} max={100}></Wrapper>;
};

const Wrapper = styled.progress`
  accent-color: ${COLORS.primary};
  background-color: ${COLORS.transparentGray15};
  -webkit-appearance: none;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--borderRadius);
  padding: var(--padding);
  height: var(--height);
  width: 370px;

  &::-webkit-progress-bar {
    background-color: transparent;
    height: var(--barHeight);
  }

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: ${props => {
        if (props.value === 99) {
          return '4px 2px 2px 4px'
        } else if (props.value === 100) {
          return '4px'
        } else {
          return '4px 0 0 4px'
        }
      }
    }
  }

  &::-moz-progress-bar {
    background-color: ${COLORS.primary};
  }
`;

export default ProgressBar;
