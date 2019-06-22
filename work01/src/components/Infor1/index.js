import React from 'react';
import Banner from './banner';
import Article from './article';
import Footers from '../Home/footer';

class Index extends React.Component {
	render() {
		return (
			<React.Fragment>
				<main>
					<div id="content">
						<Banner />
						<Article />
					</div>
				</main>
				<Footers />
			</React.Fragment>
		);
	}
}

export default Index;
