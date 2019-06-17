import React from 'react';

class Home extends React.Component {
	render() {
		return (
			<main>
				<div id="content">
					<section id="hero">
						<div className="inner">
							<div className="main-wrap">
								<h2 className="copy">
									<div>
											<img src="https://e-hakuai.com/img/top/hero-main-copy-text1.png" alt="" />
									</div>
									<div>
											<img src="https://e-hakuai.com/img/top/hero-main-copy-text2.png" alt="" />
									</div>
								</h2>
								<div className="hero-btn">
									<a href="#">お客様にご紹介され続ける理由はこちら</a>
								</div>
							</div>

							<div className="bg-slide">
								<div className="bg-wrapper">
									<ul>
										<li></li>
									</ul>
								</div>
							</div>
						</div>
					</section>
					<section id="main-content">
						<div className="banner">
							<div className="col-12">
								<a href="">
									<img src="https://e-hakuai.com/img/top/sec1-bnr.jpg" alt="banner" />
								</a>
							</div>
						</div>
						<div className="News">
							<div className="col-3">
							</div>
							<div className="col-9">
							</div>
						</div>
					</section>
				</div>
			</main>
		);
	}
}

export default Home;
