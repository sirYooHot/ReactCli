import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { actionCreators } from './store';

// 引入组件
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';


import { 
    HomeWrapper, 
    MainDetail,
    BarWrapper, 
    Navigator, 
    BackTop
} from './style';

class Home extends PureComponent {
    handleScrollTop () {
        window.scrollTo(0, 0);
    }
    bindEvents() {
        window.addEventListener(
            'scroll', 
            this.props.changeScrollTopShow
        );
    }
    render() {
        const {
            showScroll
        } = this.props;
        return (
            <div>
                <HomeWrapper>
                    <MainDetail>
                        <BarWrapper>
                            <img 
                                className='banner-img' 
                                src='//upload.jianshu.io/admin_banners/web_images/4448/d9a0fd8f0622d2323161b68d2123c7f28837d28f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
                                alt=""/>
                        </BarWrapper>
                        <Topic />
                        <List />
                    </MainDetail>
                    <Navigator>
                        <Recommend />
                        <Writer />
                    </Navigator>
                </HomeWrapper>
                { showScroll ? <BackTop onClick={this.handleScrollTop}><i className='iconfont backTop'>&#xe61f;</i></BackTop> : false }
            </div>
        )
    }
    // 组件挂载完成后
    componentDidMount() {
        this.props.initTopicList();
        this.props.initHomeData();

        this.bindEvents();
    }

    // 组件移除后
    componentWillUnmount() {
        window.removeEventListener(
            'scroll', 
            this.props.changeScrollTopShow
        );
    }
}


// 获取store的初始化数据
const mapState = (state) => ({
    showScroll: state.getIn(['home','showScroll'])
})


// 定义方法
const mapDispatch = (dispatch) => ({

    initTopicList() {
        dispatch(actionCreators.getTopicList());
    },
    initHomeData() {
        dispatch(actionCreators.getHomeData());
    },
    changeScrollTopShow() {
        if(document.documentElement.scrollTop > 300){
            dispatch(actionCreators.toggleTopShow(true))
        }else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
    
})
export default connect(mapState, mapDispatch)(Home);