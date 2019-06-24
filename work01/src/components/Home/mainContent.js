/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const articleImages = [
	'https://e-hakuai.com/wp-content/uploads/2019/05/G7A0835-min-a-min-425x285.jpg',
	'https://e-hakuai.com/wp-content/uploads/2019/04/G7A6628-425x285.jpg',
	'https://e-hakuai.com/wp-content/uploads/2019/04/G7A6628-425x285.jpg',
	'https://e-hakuai.com/wp-content/uploads/2019/04/G7A7656-425x285.jpg',
	'https://e-hakuai.com/wp-content/uploads/2019/04/c70e992b58b5ec91f1e2c72c54fe5d88-425x285.jpg',
	'https://e-hakuai.com/wp-content/uploads/2019/04/c70e992b58b5ec91f1e2c72c54fe5d88-425x285.jpg',
	'https://e-hakuai.com/wp-content/uploads/2019/04/55c7982a6b8a59f0f69744c051ae0eaf-425x285.jpg',
	'https://e-hakuai.com/wp-content/uploads/2019/04/c70e992b58b5ec91f1e2c72c54fe5d88-1-425x285.jpg',
	'https://e-hakuai.com/wp-content/uploads/2019/04/hakuai-001-425x285.jpg'
];

const infoItems = [ 'すべてのお知らせ', 'オフィシャルブログ', '施工状況', 'イベント情報', '土地情報', 'その他' ];
//article component
export const Article = ({ imgSrc }) => {
	return (
		<article className="col-4">
			<a href="">
				<figure className="thumb">
					<img src={imgSrc} alt="article" />
				</figure>
			</a>
		</article>
	);
};

const data = [
	{
		date: 'joyce',
		tag: '180',
		title: 'female'
	},
	{
		date: 'joyce',
		tag: '180',
		title: 'female'
	}
];
//info-list component
export const InfoList = ({ info }) => {
	const { date, tag, title } = info;
	return (
		<li>
			<div className="data">{date}</div>
			<div className="tag">{tag}</div>
			<p>{title}</p>
		</li>
	);
};

export default () => {
	return (
		<section id="main-content">
			<div className="banner">
				<div className="col-12">
					<a href="">
						<img src="https://e-hakuai.com/img/top/sec1-bnr.jpg" alt="banner" />
					</a>{' '}
				</div>{' '}
			</div>
			<div className="News">
				<div className="col-3">
					<div className="tt1">
						<p className="works-title"> WORKS </p>{' '}
						<h2 className="news-solgan">
							<img src="https://e-hakuai.com/img/top/sec1-ttl.png" alt="" />
						</h2>{' '}
					</div>
					<p>
						<div> 博愛がこれまでに </div> <div> 手掛けてきた建築事例です。 </div>{' '}
					</p>
					<div className="more-btn">
						<a href=""> 建築事例をもっと見る </a>{' '}
					</div>{' '}
				</div>{' '}
				<div className="col-9"> {articleImages.map((img) => <Article imgSrc={img} />)}</div>
			</div>
			<div className="Information">
				<div className="info-title">
					<h2> Information </h2>{' '}
					<a class="view-btn" href="">
						ALL VIEW{' '}
					</a>{' '}
				</div>{' '}
				<div className="info-items">
					<ul>
						{' '}
						{infoItems.map((text, index) => (
							<li key={index}>
								<a href="#"> {text} </a>{' '}
							</li>
						))}{' '}
					</ul>{' '}
				</div>
				<div className="info-lists">
					<ul> {datas.map((arr) => <InfoList key={arr} info={{}} />)}</ul>
				</div>
				<div className="banner-items">
					<div className="col-12">
						<img src="" alt="" />
					</div>{' '}
					<div className="col-12">
						<div className="col-6">
							<img src="" alt="" />
						</div>{' '}
						<div className="col-6">
							<img src="" alt="" />
						</div>{' '}
					</div>{' '}
				</div>{' '}
			</div>{' '}
		</section>
	);
};
