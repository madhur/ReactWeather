var React = require('react')
var ReactDOM = require('react-dom')

var {Route, Router, IndexRoute, hashHistory} = require('react-router')
var Main = require('./components/Main')
var Weather = require('./components/Weather')
var About = require('./components/About')
var Examples = require('./components/Examples')
var SourceForm = require('./components/SourceForm')
var TargetForm = require('./components/TargetForm')
var Company = require('./components/Company')

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
		<Router history={hashHistory}>
			<Route path="/" component={Main}>
				<Route path="about" component={About} />
				<Route path="examples" component={Examples} />
				<Route path="company" component={Company} >
					<Route path=":companyId" component={Company} />
				</Route>
				<Route path="sourceform" component={SourceForm} />
				<Route path="targetform" component={TargetForm} />
				<IndexRoute component={Weather}/>
			</Route>
		</Router>
	, 
	document.getElementById('main'));