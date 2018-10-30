import styled from 'styled-components';
import  LoginPic from '../../statics/jianshu_logo.png';

// 导出创建带样式的标签
export const HeaderWrap = styled.div`
    height: 58px;line-height: 58px;
    min-height: 58px;
    border-bottom: 1px solid #e2e2e2;
`

export const Logo = styled.div`
    display:block; 
    position: absolute;
    top: 0;
    left: 0;

    width: 100px;
    height: 56px;
    background: url(${LoginPic});
    background-size: contain;
`

export const NavWrap = styled.div`
    box-sizing: border-box;
    width: 100%;
    max-width: 960px;
    height: 100%;
    margin: 0 auto;
    padding: 0 210px 0 100px;
`

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 14px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
    }
    &.active {
        color: #ea6f5a;
    }

`

export const NavSearchWrap = styled.div`
    position: relative;
    float: left;

    .zoom {
        position: absolute;
        right: 4px;
        top: 15px;
        
        width: 30px;
        height: 30px;
        text-align: center;
        line-height:30px;
        border-radius: 15px;
        background: #eee;
        &.focused {
            color: #fff;
            background: #777;
        }
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`

    &.slide-enter {
        transition: all 0.5s ease-out;
    }
    &.slide-enter-active {
        width: 250px;
    }
    &.slide-exit {
        transition: all 0.5s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }

    box-sizing: border-box;
    width: 160px;
    height: 38px;
    padding: 0 35px 0 20px;
    margin-left: 9px;
    margin-right: 0px;
     
    font-size: 14px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 250px;
    }
`
export const TagArea = styled.div`
    position: absolute;
    left: 0;
    top: 56px;

    width: 240px;
    line-height: 20px;
    padding: 20px 20px 10px;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    
`

export const SrhTagHead = styled.div`
    overflow: hidden;

    margin: 0 0 10px 0;
`

export const SrhTitle = styled.div`
    float: left;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`
export const ChgIconWrap = styled.span`
    float: right;
    
    font-size: 14px;
    color: #969696;
    cursor: pointer;
    .switcher {
        display: block;
        float: left;

        font-size: 12px;
        margin-right: 5px;
        transition: all .3s ease-in;
        transform: rotate(0deg);
        transform-origin: center center;
    }
`
export const SrhTagList = styled.span`
    float: left;

    overflow: hidden;
`

export const TagItem = styled.a`
    float: left;
    
    margin: 0 10px 8px 0;
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
`

export const Addition = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    height: 56px;
`

export const Button = styled.div`
    float: right;

    margin-top: 9px;
    line-height: 38px;
    margin-right: 20px;
    padding: 0px 20px;

    border-radius: 19px;
    border: 1px solid #ec6149;
    cursor: pointer;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background: #ec6149;
    }
`