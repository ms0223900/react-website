import React from 'react';
import Banner from './Banner';
import Message from './Message';
import Company from './companyIntro';
import Member from './member';
import Footers from '../Home/footer';

class About extends React.Component {
	render() {
		return (
			<React.Fragment>
				<main>
					<div id="content">
						<Banner />
						<Message />
						<Company />
						<Member />
					</div>
				</main>
				<Footers />
			</React.Fragment>
		);
	}
}

export default About;
