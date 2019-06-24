import React from 'react';
import Banner from './Banner';
import Cate from './Cate';
import Pages from './pages';
import Footers from '../Home/footer';

class Index extends React.Component {
	render() {
		return (
			<React.Fragment>
				<main>
					<div id="content">
						<Banner />
						<Cate />
						<Pages />
					</div>
				</main>
				<Footers />
			</React.Fragment>
		);
	}
}

export default Index;
