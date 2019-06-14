import React from 'react';
class Input extends React.Component {
	render() {
		return (
			<section className="screen">
				<div className="computation-screen">{this.props.equation}</div>
			</section>
		);
	}
}

export default Input;
