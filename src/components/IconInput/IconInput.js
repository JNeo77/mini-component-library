import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--fontSize': 0.875 + 'rem',
    '--padding': `2px 0 2px 24px`,
    '--iconSize': 16 + 'px',
    '--bottom': 2 + 'px'
  },
  large: {
    '--fontSize': 1.125 + 'rem',
    '--padding': `4px 0 4px 32px`,
    '--iconSize': 24 + 'px',
    '--bottom': 4 + 'px'
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = SIZES[size]
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <SearchInput style={{'--width': width + 'px', ...styles}} placeholder={placeholder}></SearchInput>
      <IconWrapper style={styles}>
        <Icon id={icon} stroke-width={1} size={size === 'large' ? 24 : 16}></Icon>
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  border-bottom: 2px solid black;
`

const SearchInput = styled.input`
  width: var(--width);
  border: none;
  font-size: var(--fontSize);
  padding: var(--padding);
  font-weight: bold;
  color: ${COLORS.gray700};

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 4px;
  }

  &:hover {
    color: black;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: var(--bottom);
  width: var(--iconSize);
  height: var(--iconSize);
  margin: auto;
  pointer-events: none;
`

export default IconInput;
