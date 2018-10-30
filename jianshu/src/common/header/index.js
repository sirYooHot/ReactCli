import React, { Component } from 'react';
import {connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store/index.js';
import { Link } from 'react-router-dom';

import { HeaderWrap, Logo, NavWrap, NavItem, NavSearchWrap, NavSearch, 
    TagArea, SrhTagHead, SrhTitle, ChgIconWrap, 
    SrhTagList, TagItem, Addition, Button, } from './style.js';


class Header extends Component {
    // 搜索下拉
    showTagArea() {
        const { focused, mouseEntered, getTagList, nowPage, totalPage, 
        tagMouseEnter, tagMouseLeave, tagPageChange } = this.props;
        const newList = getTagList.toJS();
        const pageList = [];

        if(newList.length){
            for(let i=nowPage*10;i<(nowPage+1)*10;i++){
                if(newList[i]){
                    pageList.push( <TagItem key={newList[i]}>{ newList[i] }</TagItem> )
                }
            }
        }
        if(focused || mouseEntered) {
            return (<TagArea onMouseEnter={tagMouseEnter} onMouseLeave={tagMouseLeave}>
                    <SrhTagHead>
                        <SrhTitle>
                            热门搜索
                        </SrhTitle>
                        <ChgIconWrap onClick={() => {tagPageChange(nowPage, totalPage, this.switcherIcon)}}>
                            <i ref={(icon) => {this.switcherIcon = icon}} className='switcher iconfont'>&#xe603;</i>
                            换一批
                        </ChgIconWrap>
                    </SrhTagHead>
                    <SrhTagList>{ pageList }</SrhTagList>
            </TagArea>)
        }else {
            return null;
        }
    }
    
    //html结构
    render() {
        const { focused, searchFocus, sreachBlur, getTagList } = this.props;
        return (<HeaderWrap>
            <Link to="/"> <Logo /> </Link>
            <NavWrap>
                <NavItem className='left'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavSearchWrap>
                    <CSSTransition in={focused} timeout={1000} classNames='slide'>
                        <NavSearch className={focused ? 'focused' : ''}
                            onFocus={()=>{searchFocus(getTagList)}} onBlur={sreachBlur}>
                        </NavSearch>
                    </CSSTransition>
                    <i className={focused ? 'iconfont focused zoom' : 'iconfont zoom'}>&#xe800;</i>
                    {this.showTagArea()}
                </NavSearchWrap>
                <NavItem className='right'>登陆</NavItem>
                <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
            </NavWrap>
            <Addition>
                <Button className='writting'><i className='iconfont'>&#xe6a4;</i>写文章</Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrap>)
    }
}

// 初始化数据
const mapState = (state) => ({
    focused: state.getIn(['header', 'focused']),
    mouseEntered: state.getIn(['header', 'mouseEntered']),
    getTagList: state.getIn(['header', 'getTagList']),
    nowPage: state.getIn(['header', 'nowPage']),
    totalPage: state.getIn(['header', 'totalPage'])
})
// 派发数据
const mapDispatch = (dispatch) => {
    return {
        searchFocus(getTagList) {
            (getTagList.size === 0)&&dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus());
        },
        sreachBlur() {
            dispatch(actionCreators.searchBlur());
        },
        tagMouseEnter() {
            dispatch(actionCreators.searchMouseEnter());
        },
        tagMouseLeave() {
            dispatch(actionCreators.searchMouseLeave());
        },
        tagPageChange(nowPage, totalPage, switcherIcon) {
            if(nowPage < totalPage-1){
                dispatch(actionCreators.searchClickChange(nowPage+1));
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


export default connect(mapState, mapDispatch)(Header);