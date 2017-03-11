/**
 * Created by Administrator on 2017/3/10.
 */
/*
* 记录界面
*/
import React from 'react';
import Public from './bottom.js';

class Content extends  React.Component {
    render (){
        return (
            <div className="index_minutex">
                <div className="content_title">
                    <input type="text" placeholder="请输入标题"/>
                </div>
                <div className="content_text">
                    <textarea name="" placeholder="请输入正文"></textarea>
                </div>
            </div>
        )
    }
};

class Minutex extends React.Component {
    render (){
        return (
            <div>
                <div>
                    <Content />
                </div>
                <Public is_name="记录" />
            </div>
        )
    }
};

export default Minutex;