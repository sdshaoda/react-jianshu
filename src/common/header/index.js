import React, { Component } from 'react';
import { connect } from 'react-redux';
import { creators } from './store';
// import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearchWrapper, NavSearch, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, Button } from './style';

class Header extends Component {
  render() {
    return (

      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavSearchWrapper>
            {/* <CSSTransition
              in={this.props.inputFocused}
              timeout={500}
              classNames="slide"
            > */}
            <NavSearch className={this.props.inputFocused ? 'focus' : ''} onFocus={this.props.inputFocus} onBlur={this.props.inputBlur} />
            {/* </CSSTransition> */}
            <i className={this.props.inputFocused ? 'icon i-search focus' : 'icon i-search'}></i>
            <SearchInfo style={{ display: this.props.inputFocused ? 'block' : 'none' }}>
              <SearchInfoTitle>
                热门搜索
              <SearchInfoSwitch>换一批</SearchInfoSwitch>
              </SearchInfoTitle>
              <div>
                <SearchInfoItem>行拒杯2018征文</SearchInfoItem>
                <SearchInfoItem>区块链</SearchInfoItem>
                <SearchInfoItem>小程序</SearchInfoItem>
                <SearchInfoItem>毕业</SearchInfoItem>
                <SearchInfoItem>vue</SearchInfoItem>
                <SearchInfoItem>PHP</SearchInfoItem>
                <SearchInfoItem>美食</SearchInfoItem>
                <SearchInfoItem>flutter</SearchInfoItem>
              </div>
            </SearchInfo>
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
  }
}

const mapStateToProps = (state) => {
  return {
    inputFocused: state.get('header').get('inputFocused')
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
