import React from 'react';
import Banner from './banner';
import Intro from './jobintro';
import Content from './jobcontent';
import Lists from './joblists';
import Footers from '../Home/footer';

class Index extends React.Component {
	render() {
		return (
			<React.Fragment>
				<main>
					<div id="content">
						<Banner />
						<Intro />
						<Content />
						<Lists />
					</div>
				</main>
				<Footers />
			</React.Fragment>
		);
	}
}

export default Index;
