import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import {
    WriterWrapper, 
    WriterList
} from '../style';

class Writer extends PureComponent {
    render() {
        const {
            writerList
        } = this.props;

        return (
            <Fragment>
                <WriterWrapper>
                    {
                        writerList.map((item) => {
                            return (
                                <WriterList key={item.get('id')}>
                                    <li className='listItem'>
                                        <a className='itemLeft' href="">
                                            <img
                                            className="userlogo"
                                            src={item.get('avatar_source')} alt=""/>
                                        </a>
                                        <div className="itemRight">
                                            <p className="title">
                                                <span className='witer'>{item.get('nickname')}</span>
                                                <span className='follow'>关注</span>
                                            </p>
                                            <p className="tagWrap">
                                                <span className='tag'>写了{item.get('total_wordage')}字</span> · 
                                                <span className='tag right'>{item.get('total_likes_count')}喜欢</span>
                                            </p>
                                        </div>
                                    </li>
                                </WriterList>
                            )
                        })
                    }
                </WriterWrapper>
            </Fragment>
        )
    }
}
const mapState = (state) => {
    return {
        writerList: state.getIn(["home","writerList"])
    }
}
export default connect(mapState, null)(Writer);