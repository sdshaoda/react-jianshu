import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Button } from './style';

class Header extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavSearch />
        </Nav>
        <Button className="write">写文章</Button>
        <Button className="reg">注册</Button>
        <NavItem className="right login">登录</NavItem>
        <NavItem className="right mode">Aa</NavItem>
      </HeaderWrapper>
    )
  }
}

export default Header;
