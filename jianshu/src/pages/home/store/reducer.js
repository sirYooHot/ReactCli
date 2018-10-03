import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';


// state.header.focused
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    typeList: [],
    writerList: [],
    articlePage: 1,
    showScroll: false
});


//封装switch条件中的内容；
const initHomeData = (state, action) => {
    return state.merge({
        articleList: fromJS(action.articleList),
        typeList: fromJS(action.typeList),
        writerList: fromJS(action.writerList)
    })
}
const loadMoreArticle = (state, action) => {
    return state.merge({
        articleList: state.get('articleList').concat(fromJS(action.articleList)),
        articlePage: fromJS(action.nextPage)
    })
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.TOPICLIST_GET:
            return state.merge({
                topicList: fromJS(action.topicList)
            })
        case actionTypes.HOMEDATA_INIT:
            return initHomeData(state, action);
        case actionTypes.MOREARTICLE_LOAD:
            return loadMoreArticle(state, action);
        case actionTypes.TOGGLETOP_SHOW:
            return state.merge({
                showScroll: fromJS(action.showScroll)
            })
        default:
        return state;
    }
}