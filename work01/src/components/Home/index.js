import React from 'react'
import Banner from './banner'
import MainContent from './mainContent'
import Ponits from './points'

class Home extends React.Component {
	render() {
		return (
			<main>
				<div id="content">
          <Banner />
          <MainContent />
					<Ponits />
				</div>
			</main>
		);
	}
}

export default Home
