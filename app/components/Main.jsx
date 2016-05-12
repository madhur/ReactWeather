var React = require('react')
var ReactDOM = require('react-dom')
var Nav = require('./Nav')

var Main = React.createClass({
	render: function()
	{
		return (
			<div>
				<Nav></Nav>
				<div className="row">
					<div className="large-4 medium-6 columns small-centered">
						{this.props.children}
					</div>
				</div>
			</div>
			);
	}
});

module.exports = Main;