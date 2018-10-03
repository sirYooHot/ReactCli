import axios from 'axios';
import * as actionTypes from './actionTypes';

// 初始化数据
const initTopicList = (data) => ({
    type: actionTypes.TOPICLIST_GET,
    topicList: data
})
const initHomeData = (data) => ({
    type: actionTypes.HOMEDATA_INIT,
    articleList: data.articleList,
    typeList: data.typeList,
    writerList: data.writerList
})
// 加载更多数据
const loadMoreArticle = (data, nextPage) => ({
    type: actionTypes.MOREARTICLE_LOAD,
    articleList: data.articleMore,
    nextPage: nextPage
})

// 页面回到顶部
export const toggleTopShow = (flag) => ({
    type: actionTypes.TOGGLETOP_SHOW,
    showScroll: flag
})

// 获取初始化数据
export const getTopicList = () => {
    return (dispatch) => {
        axios.get('/api/topicList.json')
        .then(
            (res) => {
                if(res.data.success){
                    const result = res.data.resModel;
                    dispatch(initTopicList(result));
                }
            }
        )
        .catch(
            (err) => {
                console.log(err)
            }
        )
    }
}
export const getHomeData = () => {
    return (dispatch) => {
        // 获取其他首页
        axios.get('/api/homeOther.json')
        .then(
            (res) => {
                if(res.data.success){
                    const result = res.data.resModel;
                    dispatch(initHomeData(result));
                }
            }
        ).catch(
            (err) => {
                console.log(err)
            }
        )
    }
}

// 获取文章更多数据
export const getMoreList = (page) => {
    return (dispatch) => {
        // 获取更多数据
        axios.get('/api/articleMore.json?page=' + page)
        .then((res) => {
            if(res.data.success){
                const result = res.data.resModel;
                dispatch(loadMoreArticle(result, page+1));
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}
