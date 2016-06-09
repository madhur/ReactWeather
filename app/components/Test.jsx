var React = require('react');
var ReactDOM = require('react-dom');
var {Link, IndexLink} = require('react-router')

var Test = React.createClass({

	render: function()
	{
		var val1=this.props.route.key1;

		function renderme()
		{
			if(val1=="a")
			{
				return 	<div id="a">a</div>
			}
			else if(val1=="b")
			{
				return 	<div id="b">b</div>
			}
			else
			{
				return (
						<div>
							<div id="a">a</div>
							<div id="b">b</div>
						</div>
					);
			}
		}

		return (

			<div>
				{renderme()}
				<br/>
				<Link to="/test">All</Link>
				<br/>
				<Link to="/test/a">A</Link>
				<br/>
				<Link to="/test/b">B</Link>
				<br/>
			</div>

			)
	}


});

module.exports = Test;