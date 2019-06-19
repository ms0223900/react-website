import React from 'react'
import Banner from './banner'
import MainContent from './mainContent'
import Ponits from './points'
import Menu from './menu'
import Paper from './paper'
import Ig from './IG'
import Footers from './footer'

class Index extends React.Component {
	render() {
		return (
			<div>
				<main>
					<div id="content">
	          <Banner />
	          <MainContent />
						<Ponits />
						<Menu/>
						<Paper/>
						<Ig/>
					</div>
				</main>
				<Footers/>
			</div>


		);
	}
}

export default Index;
