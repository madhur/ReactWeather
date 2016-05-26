var React = require('react')
var ReactDOM = require('react-dom')

var {Route, Router, IndexRoute, hashHistory} = require('react-router')
var Main = require('./components/Main')
var Weather = require('./components/Weather')
var About = require('./components/About')
var Examples = require('./components/Examples')
var ToolBox = require('./components/ToolBox');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css

ReactDOM.render(
		<Router history={hashHistory}>
			<Route path="/" component={Main}>
				<Route path="about" component={About} />
				<Route path="examples" component={Examples} />
				<Route path="toolbox" component={ToolBox} />
				<IndexRoute component={Weather}/>
			</Route>
		</Router>
	, 
	document.getElementById('main'));