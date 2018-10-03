import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

// 引入样式文件
import { 
    TopicWrapper,
    TopicItem
} from '../style';

class Topic extends PureComponent {
    render() {
        const {
            topicList
        } = this.props;

        return (
            <TopicWrapper>
                {
                    topicList.map((item) => {
                        return (
                            <TopicItem key={item.get('id')}>
                                <img 
                                className="itemImg" 
                                src={item.get('imgUrl')} 
                                alt="" />
                                <span className="itemTxt">
                                    {item.get('title')}
                                </span>
                            </TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        )
    }
}
const mapState = (state) => ({
    topicList: state.getIn(['home', 'topicList'])
})

export default connect(mapState, null)(Topic);