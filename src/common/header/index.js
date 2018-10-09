import React from 'react';
import { connect } from 'react-redux';
import * as creators from './store/actionCreators';
// import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearchWrapper, NavSearch, Button } from './style';

const Header = (props) => (
  <HeaderWrapper>
    <Logo />
    <Nav>
      <NavItem className="left active">首页</NavItem>
      <NavItem className="left">下载App</NavItem>
      <NavSearchWrapper>
        {/* <CSSTransition
          in={props.inputFocused}
          timeout={500}
          classNames="slide"
        > */}
        <NavSearch className={props.inputFocused ? 'focus' : ''} onFocus={props.inputFocus} onBlur={props.inputBlur} />
        {/* </CSSTransition> */}
        <i className={props.inputFocused ? 'icon i-search focus' : 'icon i-search'}></i>
      </NavSearchWrapper>
    </Nav>
    <Button className="write">
      <i className="icon i-icon-checkin"></i>
      写文章
    </Button>
    <Button className="reg">注册</Button>
    <NavItem className="right login">登录</NavItem>
    <NavItem className="right mode">
      <i className="icon i-Aa"></i>
    </NavItem>
  </HeaderWrapper>
)

const mapStateToProps = (state) => {
  return {
    inputFocused: state.header.inputFocused
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    inputFocus() {
      const action = creators['inputFocus']();
      dispatch(action);
    },
    inputBlur() {
      const action = creators['inputBlur']();
      dispatch(action);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
