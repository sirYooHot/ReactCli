import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {
    TypeListWrapper, 
    TypeList
} from '../style';

class Recommend extends PureComponent {
    render() {
        const {
            typeList
        } = this.props;
        return (
            <TypeListWrapper>
                {
                    typeList.map((item) => {
                        return (
                            <TypeList key={item.get('id')}>
                                <img 
                                className='typeImg'
                                src={item.get('imgUrl')} alt="" />
                            </TypeList>
                        )
                    })
                }
            </TypeListWrapper>
        )
    }
}

const mapState = (state) => (
    {
        typeList: state.getIn(['home', 'typeList'])
    }
)
export default connect(mapState, null)(Recommend);