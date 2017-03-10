/**
 * Created by Administrator on 2017/3/9.
 */
var React = require('react');
var ReactDOM = require('react-dom');
import { hashHistory, Route, Router ,IndexRoute} from 'react-router';
import Souye from './souye.js';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Souye}>
            <IndexRoute component={Souye}/>
        </Route>
    </Router>),document.getElementById("index")
);