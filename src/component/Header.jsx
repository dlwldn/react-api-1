import React from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.header`
  width: 100%;
  height: 70px;
  padding: 0 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 3px #eee;
  background-color: #fff;
`

function Header() {
  return (
    <HeaderWrap>
      <span>미세먼지 정보</span>
    </HeaderWrap>
  )
}

export default Header
