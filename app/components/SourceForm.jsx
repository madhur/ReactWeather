var React = require('react')
var ReactDOM = require('react-dom')
import { hashHistory } from 'react-router';

var SourceForm = React.createClass({

	navigate: function()
	{
		var obj = {
			1: this.refs.field1.value,
			2: this.refs.field2.value,
			3: this.refs.field3.value
		};

		this.props.setParentState(obj);
		hashHistory.push('/targetform');

	},

	render: function()
	{
		return(<div>
			<input type="text" placeholder="Field1" ref="field1"/>
			<input type="text" placeholder="Field2" ref="field2"/>
			<input type="text" placeholder="Field3" ref="field3"/>
			<button className="button" onClick={this.navigate}>Navigate to Target Form</button>
		</div>);
	}

});

module.exports = SourceForm;