import React from 'react';

export const paperTitle = ({ titleText = '', link='' , className='title' }) => (
	<div className={ className }>
		<div>{ titleText }</div>
		<a href={ link } class="view-btn">
			ALL VIEW
		</a>
	</div>
)

export default () => {
	return (
		<section id="paper">
			<div className="col-12">

				<paperTitle className={'title'} titleText={'イベント情報'}/>

				<div className="content">
					<a className="col-6">
						<img src="" alt="" />
						<div className="box">
							<div className="date">
								2019.03.21<span>完成見學會</span>
							</div>
							<p>
								6月29日・30日　早良区のモダン×趣味の家　完成内覧会
								<span>預約制</span>
								<span>New</span>
							</p>
						</div>
					</a>
				</div>
			</div>

			<div className="col-12">

				<div className="col-6">

					<paperTitle className={'title'} titleText={'施工状況'}/>

					<div className="content">
						<a className="item">
							<img src="" alt="" />
							<div className="box">
								<div className="date">
									2019.03.21<span>完成見學會</span>
								</div>
								<p>
									6月29日・30日　早良区のモダン×趣味の家　完成内覧会
									<span>預約制</span>
									<span>New</span>
								</p>
							</div>
						</a>
						<a className="item">
							<img src="" alt="" />
							<div className="box">
								<div className="date">
									2019.03.21<span>完成見學會</span>
								</div>
								<p>
									6月29日・30日　早良区のモダン×趣味の家　完成内覧会
									<span>預約制</span>
									<span>New</span>
								</p>
							</div>
						</a>
						<a className="item">
							<img src="" alt="" />
							<div className="box">
								<div className="date">
									2019.03.21<span>完成見學會</span>
								</div>
								<p>
									6月29日・30日　早良区のモダン×趣味の家　完成内覧会
									<span>預約制</span>
									<span>New</span>
								</p>
							</div>
						</a>
					</div>
				</div>

				<div className="col-6">

					<paperTitle className={'title'} titleText={'オフィシャルブログ'}/>

					<div className="content">
						<a className="item">
							<img src="" alt="" />
							<div className="box">
								<div className="date">
									2019.03.21<span>完成見學會</span>
								</div>
								<p>
									6月29日・30日　早良区のモダン×趣味の家　完成内覧会
									<span>預約制</span>
									<span>New</span>
								</p>
							</div>
						</a>
						<a className="item">
							<img src="" alt="" />
							<div className="box">
								<div className="date">
									2019.03.21<span>完成見學會</span>
								</div>
								<p>
									6月29日・30日　早良区のモダン×趣味の家　完成内覧会
									<span>預約制</span>
									<span>New</span>
								</p>
							</div>
						</a>
						<a className="item">
							<img src="" alt="" />
							<div className="box">
								<div className="date">
									2019.03.21<span>完成見學會</span>
								</div>
								<p>
									6月29日・30日　早良区のモダン×趣味の家　完成内覧会
									<span>預約制</span>
									<span>New</span>
								</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
