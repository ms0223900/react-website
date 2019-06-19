/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export const PointItem = ({ imgSrc = '', link = '', className = 'col-4' }) => (
	<li className={className}>
		<a href={link}>
			<img src={imgSrc} alt="" />
		</a>
	</li>
);

export default () => {
	return (
		<section id="points">
			<p>point</p>
			<h2>HAKUAI的家</h2>
			<ul className="item">{[ ...Array(3).keys() ].map((arr) => <PointItem key={arr} />)}</ul>
			<ul className="item">{[ ...Array(4).keys() ].map((arr) => <PointItem key={arr} className={'col-3'} />)}</ul>
		</section>
	);
};
