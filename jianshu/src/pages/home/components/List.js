import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

import {
    ListWrapper,
    ListContent, 
    ListLeft, 
    LsitRight,
    LoaderMore
} from '../style'

class List extends PureComponent {
    render() {
        const {
            list, 
            addMoreList, 
            articlePage
        } = this.props;
        return (
            <ListWrapper>
                {
                    list.map((item, index) => {
                        return (
                            
                            <ListContent key={index} >
                                <ListLeft>
                                    <Link to='/detail' className="titleLink">
                                        <div className="title">
                                            {item.get('title')}
                                        </div>
                                    </Link>
                                    <div className="content">
                                        {item.get('content')}
                                    </div>
                                </ListLeft>
                                <LsitRight>
                                    <img
                                    className="itemImg" 
                                    src={item.get('imgUrl')} alt=""/>
                                </LsitRight>
                            </ListContent>
                        )
                    })
                }
                <LoaderMore 
                onClick={() => addMoreList(articlePage)}>
                    加载更多
                </LoaderMore>
            </ListWrapper>
        )
    }
}
const mapState = (state) => ({
    list: state.getIn(['home','articleList']),
    articlePage: state.getIn(['home','articlePage'])
})
const mapDispatch = (dispatch) => ({
    addMoreList(page) {
        dispatch(actionCreators.getMoreList(page))
    }
})
export default connect(mapState, mapDispatch)(List);