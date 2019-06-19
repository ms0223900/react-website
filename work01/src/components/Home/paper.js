import React from 'react';

export const PaperTitle = ({ titleText = '', link='' , className='title' }) => (
	<div className={ className }>
		<div>{ titleText }</div>
		<a href={ link } class="view-btn">
			ALL VIEW
		</a>
	</div>
)

export const ItemLists = ({imgSrc = '', link = '', date = '', tag1 = '', tag2 = '', content = '', mark1 = '', mark2 = ''}) => (
	<a href={link} className="item">
		<img src={imgSrc} alt="" />
		<div className="box">
			<div className="date">
				{date}<span>{tag1}</span><span>{tag2}</span>
			</div>
			<p>
				{content}
				<span>{mark1}</span>
				<span>{mark2}</span>
			</p>
		</div>
	</a>
)

export default () => {
	return (
		<section id="paper">
			<div className="col-12">

				<PaperTitle className={'title'} titleText={'イベント情報'}/>



				<div className="content">
					<ItemLists
						date={'2019.03.22'}
						tag1={'完成見學會'}
						content={'6月29日・30日　早良区のモダン×趣味の家　完成内覧会'}
						mark1={'預約制'}
						mark2={'New'}/>
				</div>
			</div>

			<div className="col-12">

				<div className="col-6">

					<PaperTitle className={'title'} titleText={'施工状況'}/>

					<div className="content">
						{[ ...Array(3).keys() ].map((arr) => <ItemLists
																										key={arr}
																										date={'2019.03.21'}
																										tag1={'完成見學會'}
																										content={'6月29日・30日　早良区のモダン×趣味の家　完成内覧会'}
																										mark1={'預約制'}
																										mark2={'New'}/>)}
					</div>
				</div>

				<div className="col-6">

					<PaperTitle className={'title'} titleText={'オフィシャルブログ'}/>

					<div className="content">
						{[ ...Array(3).keys() ].map((arr) => <ItemLists
																										key={arr}
																										date={'2019.03.21'}
																										tag1={'完成見學會'}
																										content={'6月29日・30日　早良区のモダン×趣味の家　完成内覧会'}
																										mark1={'預約制'}
																										mark2={'New'}/>)}
					</div>
				</div>
			</div>
		</section>
	);
};
