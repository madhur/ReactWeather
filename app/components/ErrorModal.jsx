var React = require('react');

var ErrorModal = React.createClass({

	propTypes: {
		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired
	},

	getDefaultProps: function()
	{
		return {
			title: "Error"
		}
	},

	componentDidMount: function()
	{
		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},

	render: function()
	{
		return(
				<div className="reveal tiny text-centered" id="error-modal" data-reveal="">
					<h4>{this.props.title}</h4>
					<p>{this.props.message}</p>
					<p>
						<button className="button hollow" data-close="">
							Okay
						</button>
					</p>
				</div>
			);

	}

});

module.exports = ErrorModal;