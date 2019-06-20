import React from 'react';

export const InforCats = ({ className = '', link = '', text = '' }) => (
  <li>
		<a className={className} href={link}>
			{ text }
		</a>
	</li>
);

export const InforLists = ({ className1 = '',className2 = '',link = '',imgSrc = '' ,date = '' ,text1 = '' ,text2 = '' }) => (
  <article className={className1}>
     <a className={className2} href={link}>
      <figure className="thumb">
        <img src={ imgSrc } width="90" height="90" alt="サムネイル">
      </figure>
      <div className="inner">
        <div className="sub-info">
           <p className="date">{ date }</p>
           <p className="cat"><span>{ text1 }</span></p>
        </div>
        <h3 className="post-ttl">{ text2 }</h3>
      </div>
     </a>
  </article>
);

export default () => {
	return (
    <div className="cate">
      <div className="col-12">
        <div className="information">
          <div className="title">
            <p>
              <span>CATEGORY</span>
            </p>
          </div>
          <ul>
            {[ ...Array(6).keys() ].map((arr) => <InforCats key={arr}></InforCats>)}
          </ul>
        </div>
      </div>
      <div className="col-12">
        <div className="information-list">
            {[ ...Array(16).keys() ].map((arr) => <InforLists key={arr}></InforLists>)}
        </div>
      </div>
    </div>
	);
};
