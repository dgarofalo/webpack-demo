import React from 'react';
import typography from 'tachyons/src/_font-family.css';
import styles from './Button.css';

class Button extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let {type, text, theme} = this.props;

		return (
			<button className={styles[theme]} type={type}>{text}</button>
		);
	}
};

Button.propTypes = {
	text: React.PropTypes.string.isRequired,
	type: React.PropTypes.oneOf(['button', 'submit']),
	theme: React.PropTypes.oneOf(['default', 'alternate'])
};

Button.defaultProps = {
	type: 'button',
	theme: 'default'
};

export default Button;