import styled from 'styled-components';

export const HomeWrapper = styled.div`
    box-sizing: border-box;
    overflow: hidden;
    width: 750px;
    margin: 0 auto;
    padding: 30px 0 0 0;
`

// 左边主要内容
export const MainDetail = styled.div`
    box-sizing: border-box;
    float: left;

    width: 500px;
    min-height: 300px;
    padding: 0px 0 0 15px;
`
export const BarWrapper = styled.div`
    box-sizing: border-box;
    overflow: hidden;

    margin: 0 0 30px 0;

    border-radius: 6px;
    .banner-img {
        display: block;

        width: 100%;
        min-height: 210px;
    }
`
// Topic
export const TopicWrapper = styled.div`
    box-sizing: border-box;
    overflow: hidden;
`
export const TopicItem = styled.div`
    display: inline-block;
    margin: 0 18px 18px 0;
    min-height: 32px;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    vertical-align: top;
    cursor: pointer;

    .itemImg {
        float: left;

        width: 32px;
        height: 32px;
    }

    .itemTxt {
        display: inline-block;

        line-height: 32px;
        padding: 0 11px 0 6px;
        font-size: 14px;
    }
`

// List
export const ListWrapper = styled.div`
    box-sizing: border-box;
`
export const ListContent = styled.div`
    box-sizing: border-box;
    position: relative;
    
    width: 100%;
    min-height: 140px;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
`
export const ListLeft = styled.div`
    box-sizing: border-box;

    padding-right: 135px;
    .titleLink {
        color: #000;
        text-decoration: none;
        .title {
            display: inherit;
    
            margin: -7px 0 4px;
            line-height: 1.5;
            font-size: 18px;
            font-weight: 700;
            
        }
        &:hover {
            text-decoration: underline;
        }
    }
    .content {
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`
export const LsitRight = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 15px;
    right: 0;
    
    .itemImg {
        width: 120px;
        height: 100px;
    }
`
export const LoaderMore = styled.div`
    box-sizing: border-box;

    width: 100%;
    margin: 30px auto 60px;
    padding: 10px 15px;
    border-radius: 20px;
    background-color: #a5a5a5;
    color: #fff;
    text-align: center;
    cursor: pointer;
    &:hover {
        background-color: #9b9b9b;
    }
}
`


// 右边主要内容
export const Navigator = styled.div`
    box-sizing: border-box;
    float: right;

    width: 250px;
    padding: 0 0 0 30px;
    min-height: 300px;
`
export const TypeListWrapper = styled.div`
    box-sizing: border-box;

    min-height: 228px;
    margin-top: -4px;
    padding-bottom: 4px;
`
export const TypeList = styled.div`
    box-sizing: border-box;
    .typeImg {
        display: block;

        width: 100%;
        min-height: 39px;
        margin-bottom: 6px;
        border-radius: 4px;
        cursor: pointer;
    }
`
export const WriterWrapper = styled.div`
    box-sizing: border-box;

`
export const WriterList = styled.ul`
    box-sizing: border-box;

    margin: 0 0 20px;
    text-align: left;
    list-style: none;
    .listItem {
        position: relative;

        margin-top: 15px;
    }
    
    .itemLeft {
        position: absolute;
        top: 0;
        left: 0;
        
        .userlogo {
            display: block;
            
            width: 48px;
            height: 48px;
            border: 1px solid #ddd;
            border-radius: 50%;
        }
    }
    .itemRight {
        box-sizing: border-box;
        
        min-height: 50px;
        padding: 5px 0 0 60px
    }
    .title .witer {
        padding-top: 5px;
        font-size: 14px;
    }
    .title .follow {
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
    }
    .tagWrap {
        margin-top: 12px;
        font-size: 12px;
        color: #969696;
        .right {
            float: right;
        }
    }
`

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;

    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 14px;
    border: 1px solid #dcdcdc;
    cursor: pointer;
    background: #fff;
    &:hover {
        background: #f9f9f9;
    }
`