import React from 'react';
import { Link } from 'react-router';
import NewPlaylist from './NewPlaylist.js';

class Playlists extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			inputIsValid: true,
			showWarning: ''
		};
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.validate = this.validate.bind(this);
	    this.warning = this.warning.bind(this);
	}

	validate () {
		if (!this.state.inputValue || this.state.inputValue.length > 16) {
			return true;
		} else {
			return false;
		}
	};

	handleChange (evt) {
		const value = evt.target.value;
		this.setState({
		  inputValue: value,
		  inputIsValid: this.validate(),
		  showWarning: this.warning()
		});
	}

	handleSubmit (evt) {
		this.setState({
			inputValue: '',
			inputIsValid: true
	});
		evt.preventDefault();
	}

	warning () {
		if (!this.state.inputValue) {
			return (<div className="alert alert-warning">
	      		Please enter a name.
	      		</div>)
		} else if (this.state.inputValue.length > 16) {
			return (<div className="alert alert-warning">
	      		Too many characters. Please shorten input.
	      		</div>)
		}
	}

	render() {
	  return (
	    <div>
	    	<NewPlaylist 
	    	handleSubmit={this.handleSubmit}
	    	handleChange={this.handleChange}
	    	inputValue={this.state.inputValue}
	    	inputIsValid={this.state.inputIsValid}
	    	showWarning={this.showWarning}
	    	/>
	    </div>
	  )
	}

}

export default Playlists;