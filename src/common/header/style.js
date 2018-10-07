import styled from 'styled-components';
import logoPic from '../../static/nav-logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
  display: block;
  width: 100px;
  height: 56px;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  display: inline-block;
  height: 100%;
  margin-left: 194.5px;
`;

export const NavItem = styled.div`
  margin-right: 10px;
  padding: 0 15px;
  font-size: 17px;
  line-height: 56px;
  color: #333;
  cursor: pointer;
  &.left {
    float: left;
    &:hover {
      background-color: #f5f5f5;
    }
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
    &:hover {
      background-color: #fff;
    }
  }
  &.login {
    margin: 0 6px 0 10px;
    padding: 0 12px;
    font-size: 15px;
  }
  &.mode {
    padding: 0 10px 0 15px;
    font-size: 15px;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  margin: 9px 0 9px 15px;
  padding: 0 21px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  &::placeholder {
    color: #999;
  }
`;

export const Button = styled.div`
  height: 38px;
  padding: 0 20px;
  float: right;
  line-height: 38px;
  text-align: center;
  font-size: 15px;
  border-radius: 20px;
  border: 1px solid #ec6149;
  cursor: pointer;
  &.write {
    width: 100px;
    margin: 8px 15px;
    background: #ea6f5a;
    color: #fff;
  }
  &.reg {
    width: 80px;
    margin: 9px 5px 0 15px;
    color: #ea6f5a;
  }
`;