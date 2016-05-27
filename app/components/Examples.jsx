var React = require('react')
var ReactDOM = require('react-dom')
var {Link} = require('react-router');

var Examples = React.createClass({
	render: function()
	{
		return (
			<div>
				<h1 className="text-center">Examples</h1>
				<p>Here are a few example locations to try out: </p>
				<ol>
					<li> 
						<Link to='/?location=bangalore'>Bangalore, India</Link>
					</li>
					<li> 
						<Link to='/?location=delhi'>Delhi, India</Link>
					</li>
					<li> 
						<Link to='/company/1'>company Id 1</Link>
					</li>
					<li> 
						<Link to='/company/2'>company Id 2</Link>
					</li>
				</ol>
			</div>
				
			);


	}
});

module.exports=Examples;