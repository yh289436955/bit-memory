/**
 * Created by Administrator on 2017/3/10.
 * 消息界面
 */
import React from 'react';
import Public from './bottom.js';

class News extends React.Component {
    render (){
        return (
            <div>
                <Public is_name="消息" />
                <h1>消息界面</h1>
            </div>
        )
    }
};

export default News;