import React, {Component} from 'react'

import '../css/me.css'

export default class Me extends Component{
	
	render(){
		return (
			<div class="page" id="mybg">
				 <div class="suer">
					<input type="text" class="txt" placeholder="输入手机号码/邮箱"/>
					<input type="password" class="pas" placeholder="输入密码/验证码"/>
					<button>登录</button>
				 </div>
			</div>
		)
	}
	
}