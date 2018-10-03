import React, { Component } from 'react';
import {connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store/index.js';
import { Link } from 'react-router-dom';

import {
    HeaderWrapper, Logo, Nav,NavItem, SearchWrapper, 
    NavSearch, SearchInfo, SearchInfoTitleWrapper, SearchInfoTitle, SearchInfoSwitch, 
    SearchInfoList, SearchInfoItem, Addition, Button, 
} from './style.js';


class Header extends Component {
    
    getListArea() {
        const { 
            focused, mouseEntered, searchTitleList, page, totalPage, 
            handleMouseEnter, handleMouseLeave, handlePageChange
        } = this.props;
        const newList = searchTitleList.toJS();
        const pageList = [];

        if(newList.length){
            for(let i=page*10;i<(page+1)*10;i++){
                if(newList[i]){
                    pageList.push(
                        <SearchInfoItem key={newList[i]}>
                            {newList[i]}
                        </SearchInfoItem>
                    )
                }
            }
        }
        if(focused || mouseEntered) {
            return (
                <SearchInfo 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitleWrapper>
                        <SearchInfoTitle>
                            热门搜索
                        </SearchInfoTitle>
                        <SearchInfoSwitch onClick={() => {handlePageChange(page, totalPage, this.switcherIcon)}}>
                            <i 
                            ref={(icon) => {this.switcherIcon = icon}}
                            className='switcher iconfont'>&#xe603;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitleWrapper>
                    <SearchInfoList>
                        { pageList }
                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null;
        }
    }
    
    render() {
        const { 
            focused, handleInputFocus, handleIputBlur, searchTitleList
        } = this.props;
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className='left'>
                        首页
                    </NavItem>
                    <NavItem className='left'>
                        下载App
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition 
                            in={focused} timeout={1000}
                            classNames='slide'>
                            <NavSearch 
                                className={focused ? 'focused' : ''}
                                onFocus={() => {handleInputFocus(searchTitleList)}}
                                onBlur={handleIputBlur}>
                            </NavSearch>
                        </CSSTransition>
                        <i className={focused ? 
                            'iconfont focused zoom' : 'iconfont zoom'
                        }>&#xe800;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                    <NavItem className='right'>
                        登陆
                    </NavItem>
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                </Nav>
                <Addition>
                    <Button className='writting'>
                        <i className='iconfont'>&#xe6a4;</i>
                        写文章
                    </Button>
                    <Button className='reg'>
                        注册
                    </Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        mouseEntered: state.getIn(['header', 'mouseEntered']),
        searchTitleList: state.getIn(['header', 'searchTitleList']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage'])
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus(searchTitleList) {
            (searchTitleList.size === 0)&&dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus());
        },
        handleIputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.searchMouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.searchMouseLeave());
        },
        handlePageChange(page, totalPage, switcherIcon) {
            if(page < totalPage-1){
                dispatch(actionCreators.searchClickChange(page+1));
            }else {
                dispatch(actionCreators.searchClickChange(0));
            }
            
            let originAngle = switcherIcon.style.transform.replace(/[^0-9]/ig, '');
            if(originAngle) {
                originAngle = parseInt(originAngle, 10);
            }else {
                originAngle = 0;
            }
            switcherIcon.style.transform = 'rotate('+ (originAngle+360)  +'deg)'
        }
    }
}


export default connect(mapStateToProps, mapDispathToProps)(Header);