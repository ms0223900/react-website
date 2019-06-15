import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<nav>
					<div id="logo">
						<a href="javascript::">
							<img src="assets/logo.png" alt="logo" />
						</a>
					</div>
					<ul>
						<li><a href="">会社概要</a></li>
						<li><a href="">お知らせ＆ブログ</a></li>
						<li><a href="">イベントカレンダー</a></li>
						<li><a href="">ZEH実績公表</a></li>
						<li><a href="">採用情報</a></li>
					</ul>
				</nav>
				<div className="fixed-wrap">
					<div className="box">
						<a href="javascript::" className="info-mark">
							<img src="assets/asset 1.png" alt="" />
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
