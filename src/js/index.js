/**
 * Created by Administrator on 2017/3/9.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Route, Router ,IndexRoute,Link} from 'react-router';
import Souye from './souye.js';         //首页界面
import Find from './find.js';           //发现界面
import Minutes from './minutes.js';     //记录界面
import News from './news.js';           //消息界面
import My from  './my.js';              //我的界面
import '../css/init.css';
import '../css/index.css';
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Souye}>
            <IndexRoute component={Souye}/>
        </Route>
        <Route path="/find" component={Find}></Route>
        <Route path="/minutes" component={Minutes}></Route>
        <Route path="/news" component={News}></Route>
        <Route path="/my" component={My}></Route>
    </Router>),document.getElementById("index")
);