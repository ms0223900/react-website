import React from 'react';

export const MenuItem = ({ imgSrc = '', link = '', className = 'col-4' }) => (
	<div className={className}>
		<a href={link}>
			<img src={imgSrc} alt="" />
		</a>
	</div>
);

export default () => {
	return (
		<section id="menu">
			<div className="menu-intro">
				<h2>
					<span>MENU</span>
					<img src="" alt="" />
				</h2>
				<p>注文住宅、ログハウス、リフォームなど、快適な住まいを実現するために、博愛ではお客様のご要望にお応えする様々なメニューをご用意しています。</p>
			</div>
			<div className="menu-items">{[ ...Array(3).keys() ].map((arr) => <MenuItem key={arr} />)}</div>
		</section>
	);
};
