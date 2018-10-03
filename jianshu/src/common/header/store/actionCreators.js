import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

// 聚焦
export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
});
export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
});
// 移入
export const searchMouseEnter = () => ({
    type: actionTypes.SEARCH_MOUSEENTER
});
export const searchMouseLeave = () => ({
    type: actionTypes.SEARCH_MOUSELEAVE
});

// 换一批
export const searchClickChange = (page) => ({
    type: actionTypes.SEARCH_CLICKCHANGE,
    page: page
});



const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});


export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json', )
        .then(
            (res) => {
                if(res.data.success){
                    const data = res.data.resModel;
                    dispatch(changeList(data));
                }
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        )
    }
};
