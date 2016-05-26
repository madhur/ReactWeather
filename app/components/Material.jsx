var React = require('react');
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';


// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});

var Material = React.createClass({

	render: function()
	{

		return (
			<div>
			<MuiThemeProvider muiTheme={muiTheme}>
        <AppBar title="My AppBar" />
      </MuiThemeProvider>


			<MuiThemeProvider muiTheme={muiTheme}>
			 <RaisedButton label="Default" />

			</MuiThemeProvider>

			<div>
			<MuiThemeProvider muiTheme={muiTheme}>
    <DatePicker hintText="Portrait Dialog" />
    </MuiThemeProvider>
  </div>

<div>
<MuiThemeProvider muiTheme={muiTheme}>
     <TextField
      hintText="Hint Text"
    />
 </MuiThemeProvider>
  

  </div>

  </div>
			 );
	}

});

module.exports = Material;