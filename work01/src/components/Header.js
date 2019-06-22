import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<nav>
					<Link to="/">
						<div id="logo">
							<a href="javascript::">
								<img src="assets/logo.png" alt="logo" />
							</a>
						</div>
					</Link>
					<ul>
						<Link to="/About">
							<li>
								<a href="">会社概要</a>
							</li>
						</Link>
						<Link to="/Intro">
							<li>
								<a href="">お知らせ＆ブログ</a>
							</li>
						</Link>
						<Link to="/Calendar">
							<li>
								<a href="">イベントカレンダー</a>
							</li>
						</Link>
						<li>
							<a href="">ZEH実績公表</a>
						</li>
						<li>
							<a href="">採用情報</a>
						</li>
					</ul>
				</nav>
				<div className="global-nav">
					<ul>
						<li>
							<a href="">ご紹介され続ける理由</a>
						</li>
						<li>
							<a href="">建築事例</a>
						</li>
						<li>
							<a href="">お客様の声</a>
						</li>
						<li>
							<a href="">モデルハウス</a>
						</li>
						<li>
							<a href="">HAKUAIの家づくり</a>
						</li>
						<li>
							<a href="">家づくりのメニュー</a>
						</li>
					</ul>
				</div>
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
