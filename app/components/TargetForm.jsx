var React = require('react')
var ReactDOM = require('react-dom')

var TargetForm = React.createClass({

	render: function()
	{
		var that = this;
		var data;

		function getdata()
		{
			 data = that.props.getParentState();
			//alert(JSON.stringify(data));
		}

		return(<div>
			{getdata()}
			<div>{data['1']}</div>
			<div>{data['2']}</div>
			<div>{data['3']}</div>
		</div>);
	}

});

module.exports = TargetForm;