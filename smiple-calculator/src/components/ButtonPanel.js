import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

export default class ButtonPanel extends React.Component {
	static propTypes = {
		onButtonPress: PropTypes.func
	};

	onButtonPress = (buttonName) => {
		this.props.onButtonPress(buttonName);
	};

	render() {
		const buttonData = [
			{ text: 'M+', type: '' },
			{ text: 'M-', type: '' },
			{ text: 'MR', type: '' },
			{ text: "Ben's Calc", type: '' },
			{ text: 'C', type: 'primary' },
			{ text: '⇦', type: 'primary' },
			{ text: '%', type: 'operator' },
			{ text: '/', type: 'operator' },
			{ text: '7', type: '' },
			{ text: '8', type: '' },
			{ text: '9', type: '' },
			{ text: '*', type: 'operator' },
			{ text: '4', type: '' },
			{ text: '5', type: '' },
			{ text: '6', type: '' },
			{ text: '-', type: 'operator' },
			{ text: '1', type: '' },
			{ text: '2', type: '' },
			{ text: '3', type: '' },
			{ text: '+', type: 'operator' },
			{ text: '0', type: '' },
			{ text: '.', type: '' },
			{ text: '=', type: 'large' }
		];

		return (
			<section className="key">
				<div className="keypanel__row">
					{buttonData.map((button) => (
						<Button type={button.type} onButtonPress={this.props.onButtonPress}>
							{button.text}
						</Button>
					))}
				</div>
			</section>
		);
	}
}
