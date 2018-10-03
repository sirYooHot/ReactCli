import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';


// state.header.focused
const defaultState = fromJS({
    focused: false,
    mouseEntered: false,
    searchTitleList: [],
    page: 0,
    totalPage: 1
});

export default (state = defaultState, action) => {
    switch(action.type) {
        // 聚焦
        case actionTypes.SEARCH_FOCUS:
        return state.set('focused', true);
        case actionTypes.SEARCH_BLUR:
        return state.set('focused', false);
        
        // 移入
        case actionTypes.SEARCH_MOUSEENTER:
        return state.set('mouseEntered', true);
        case actionTypes.SEARCH_MOUSELEAVE:
        return state.set('mouseEntered', false);

        // 分页
        case actionTypes.CHANGE_LIST:
        return state.merge({
            searchTitleList: action.data,
            totalPage: action.totalPage
        })
        case actionTypes.SEARCH_CLICKCHANGE:
        return state.set('page', action.page);
        

        default:
        return state;
    }
}