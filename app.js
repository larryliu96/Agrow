import React, {Component} from 'react'
import Dashbar from './dashbar'
import Content from './content'
import Header from './header'


class App extends Component {
	state = { modules: [1,1,1,1] }
	handleToggle = (index) => {
		this.setState({modules:this.state.modules.map((module, i) => {
			if(index == i) return !module
			else return module
		})})
	}
	render = () => (
		<div>
		<Dashbar handleToggle={this.handleToggle} modules={this.state.modules}/>
		<Content modules={this.state.modules}/>
		</div>
	)
}

export default App