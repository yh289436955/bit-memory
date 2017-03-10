/**
 * Created by Administrator on 2017/3/10.
 */
import React from 'react';
import Public from './bottom.js';
import { Router, Route, Link} from 'react-router'

//头像
class Headportrait extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            head : {
                img : props.head.img,
                name : props.head.name
            }
        }
    };
    render(){
        return (
            <div className="head-portrait">
                <Link>
                    <img src={this.state.head.img} alt=""/>
                    <span>{this.state.head.name}</span>
                </Link>
            </div>
        )
    }
};


//内容区域
class Content_region extends React.Component {
    constructor(props) {
        super(props);               //获取父级传下来的值
        //设置state
        this.state = {
            list : ["个人资料","公开记忆","私密记忆","意见反馈"],
        };
    }
    render (){
        var arr = [];
        for (let i=0;i<this.state.list.length;i++)
        {
            var num = this.state.list[i];
            arr.push(
                <li key={num}><Link >{num}</Link></li>
            )
        }
        return (
            <div className="my_list">
                <ul>{arr}</ul>
            </div>
        )

    }
};


class My extends React.Component{
    constructor(props) {
        super(props);               //获取父级传下来的值
        //设置state
        this.state = {
            //初始化头部的头像和名称
            head : {
                img : require('../img/0.jpg'),
                name : "孟婆来碗忘情汤"
            }
        };
    };
    render (){
        return (
            <div>
                <div>
                    <Headportrait head={this.state.head} />
                    <Content_region />
                </div>
                <Public is_name='我的' />
            </div>
        )
    }
};

export default My;