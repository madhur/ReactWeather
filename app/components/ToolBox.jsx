var React = require('react');
import Button from 'react-toolbox/lib/button';
import DatePicker from 'react-toolbox/lib/date_picker';

var ToolBox = React.createClass({

	render: function()
	{

		return (
			<div>
			 <Button label="Hello world" raised accent />
			  <Button className='customized' label='Custom button' />
			   <DatePicker label='Birthdate' />
			  </div>
			);

	}

});

module.exports = ToolBox;