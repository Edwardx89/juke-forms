import React from 'react';
import { Link } from 'react-router';
import NewPlaylist from './NewPlaylist.js';

class Playlists extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			inputIsInvalid: true,
			warningText: '',
		};
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.validate = this.validate.bind(this);
	    this.warningText = this.warningText.bind(this);
	}

	validate (value) {
		console.log(value)
		if (value.length > 16 ||  value === "" || value.length === 0) {
			return true;
		} else {
			return false;
		}
	};

	warningText (value) {
		if(this.validate(value)){
			if (value.length === 0|| value.length === undefined) {
				return "Please enter a name.";
			} else {
				return 'Too many characters. Please shorten input.';
			}
		}
	}

	handleChange (evt) {
		// Setting state is an asynchonous function and therefore we should set the function that we need to run to a variable and set the state on the variable.
		const value = evt.target.value;
		const validate = this.validate(value);
		const warningText = this.warningText(value)
		this.setState({
		  inputValue: value,
			inputIsInvalid: validate,
		  warningText: warningText,
		});
	}

	handleSubmit (evt) {
		this.setState({
			inputValue: '',
			inputIsInvalid: true
	});
		evt.preventDefault();
	}



	render() {
	  return (
	    <div>
	    	<NewPlaylist
	    	handleSubmit={this.handleSubmit}
	    	handleChange={this.handleChange}
	    	inputValue={this.state.inputValue}
	    	inputIsInvalid={this.state.inputIsInvalid}
	    	warningText={this.state.warningText}
	    	/>
	    </div>
	  )
	}

}

export default Playlists;
