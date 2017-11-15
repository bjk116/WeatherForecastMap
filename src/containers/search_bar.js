import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props){
		super(props);

		//our search term
		this.state = { term: '' };

		//this binds this to the class, not to the function
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		//here, this is referring to onInputChange, so it can't access state
		//to fix this, we had to .bind(this)
		this.setState({term: event.target.value});
	}

	onFormSubmit(event) {
		event.preventDefault();

		//We need to go and fetch weather data
		this.props.fetchWeather(this.state.term);
		//clear input
		this.setState({term: ''});
	}

	render() {
		return(
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Get a five day forecast in your favorite cities"
					className="form-control"
					//this is what makes it controlled
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	//causes action flows down into middleware and reduces
	return bindActionCreators( {fetchWeather}, dispatch);
}

//the null indicates that we don't NEED the state, we only update it
export default connect(null, mapDispatchToProps)(SearchBar);