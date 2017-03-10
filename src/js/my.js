/**
 * Created by Administrator on 2017/3/10.
 */
import React from 'react';
import Public from './bottom.js';

class My extends React.Component{
    render (){
        return (
            <div>
                <Public is_name='我的' />
                <h1>我的界面</h1>
            </div>
        )
    }
};

export default My;