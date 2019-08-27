import React from 'react';

class Hello extends React.Component {

  constructor(props) {
		super(props);

		let firstName = this.props.name.split(' ')[0];

		this.state = {
			name: firstName,
		}
	}

	render() {
		console.log(this)
		return <h1> Hello, {this.state.name} </h1>
	}
}

export default Hello;
