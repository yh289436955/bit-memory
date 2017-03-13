/**
 * Created by Administrator on 2017/3/10.
 * 消息界面
 */
import React from 'react';
import Public from './bottom.js';

class NewsContent extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            news : props.data
        }
    };
    render (){
        var arrData = [];
        if (this.state.news.length > 0)
        {
            for (let i=0;i<this.state.news.length;i++)
            {
                let data = this.state.news[i];
                arrData.push(
                    <li key={i}>
                        <span className="news_title">{data.name}</span>
                        <span className="news_time">{data.time}</span>
                        <p className="news_con">{data.content}</p>
                    </li>
                )
            }
        }
        else
        {
            arrData.push(
                <div className="no_news" key="暂无信息">暂无消息</div>
            )
        }
        return (
            <ul className="News_ul">
                {arrData}
            </ul>
        )
    }
};


class News extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            news: [
                {
                   name : '标题1',
                   time : '2017-03-13',
                   content : '内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1'
                },
               {
                    name : '标题2',
                    time : '2017-03-14',
                    content : '内容2内容2内容2内容2内容2内容2内容1'
                },
                {
                    name : '标题3',
                    time : '2017-03-15',
                    content : '内容3内容3内容3内容3内容3内容3内容3内容3'
                },
                {
                    name : '标题4',
                    time : '2017-03-16',
                    content : '内容4内容4内容4内容4内容4内容4内容4内容4'
                },
                {
                    name : '标题5',
                    time : '2017-03-16',
                    content : '内容4内容4内容4内容4内容4内容4内容4内容4'
                },
                {
                    name : '标题6',
                    time : '2017-03-16',
                    content : '内容4内容4内容4内容4内容4内容4内容4内容4'
                },
                {
                    name : '标题7',
                    time : '2017-03-16',
                    content : '内容4内容4内容4内容4内容4内容4内容4内容4'
                },
                {
                    name : '标题8',
                    time : '2017-03-16',
                    content : '内容4内容4内容4内容4内容4内容4内容4内容4'
                }
            ]
        }
    };
    render (){
        return (
            <div className="News">
                <NewsContent data={this.state.news} />
                <Public is_name="消息" />
            </div>
        )
    }
};

export default News;