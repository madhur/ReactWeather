var React = require('react')
var ReactDOM = require('react-dom')
var ErrorModal = require('ErrorModal');

var WeatherForm = React.createClass({

	getInitialState: function()
	{
		return {
		errorMessage: undefined
		}
	},

	onSubmitHandle: function(e)
	{
		// prevent the postback
		e.preventDefault();

		var location = this.refs.location.value;
		if(location!=null && location.length > 0)
		{
			this.refs.location.value = '';
			this.props.onSubmitHandle(location);
		}
		else
		{
			//alert('You must specify the location');
			this.setState({
				errorMessage: 'You must specify the location'
			})
		}
	},

	render: function()
	{
		var errorMessage = this.state.errorMessage;

		function renderError()
		{
			if(typeof errorMessage === 'string')
			{
				return (
					<ErrorModal />
					)
			}
		}

			return(

				<div>
				<form onSubmit={this.onSubmitHandle}>
					<input type="text" ref="location" placeholder="Enter city name"></input>
					<button className="button expanded hollow">Get Weather</button>
				</form>
				{renderError()}
				</div>
				
				);
	}

});

module.exports = WeatherForm;