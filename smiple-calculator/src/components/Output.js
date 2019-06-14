import React from 'react';
class Output extends React.Component {
	render() {
		return (
			<section className="screen">
				<div className="result-screen">{this.props.result}</div>
			</section>
		);
	}
}

export default Output;
