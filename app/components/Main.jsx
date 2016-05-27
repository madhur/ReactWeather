var React = require('react')
var ReactDOM = require('react-dom')
var Nav = require('./Nav')

var Main = React.createClass({

	getInitialState: function()
	{
		return {

		};
	},

	setmystate: function(newState)
	{
		this.setState(newState);
	},

	getmystate: function()
	{
		return this.state;
	},


	render: function()
	{
		return (
			<div>
				<Nav></Nav>
				<div className="row">
					<div className="large-4 medium-6 columns small-centered">
						 {this.props.children && React.cloneElement(this.props.children, {
              						setParentState: this.setmystate, getParentState: this.getmystate
            			})}
					</div>
				</div>
			</div>
			);
	}
});

module.exports = Main;