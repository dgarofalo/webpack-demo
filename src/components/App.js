import React from 'react';
import Button from './Button/Button';

import styles from './App.css';

export default class App extends React.Component {
	render() {
		return (
			<div className={styles.reset}>
				<Button
					text='Button'
				/>
			</div>
		);
	}
};
