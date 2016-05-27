var React = require('react')
var ReactDOM = require('react-dom')


var Company = React.createClass({

	render: function()
	{
		return(
			<div>{ this.props.params.companyId }</div>
			)

	}


});

module.exports=Company;