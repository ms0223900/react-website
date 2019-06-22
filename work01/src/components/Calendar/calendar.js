import React from 'react';
import Banner from './banner';
import DateCalendar from './date';
import Footers from '../Home/footer';

class Index extends React.Component {
	render() {
		return (
			<React.Fragment>
				<main>
					<div id="content">
						<Banner />
						<DateCalendar />
					</div>
				</main>
				<Footers />
			</React.Fragment>
		);
	}
}

export default Index;
