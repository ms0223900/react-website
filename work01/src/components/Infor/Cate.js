import React from 'react';

export const InforCats = ({ className = '', link = '', text = '' }) => (
  <li>
		<a className={className} href={link}>
			{ text }
		</a>
	</li>
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
    </div>
	);
};
