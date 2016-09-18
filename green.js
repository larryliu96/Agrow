import React, {Component} from 'react'

import Grid from './grid'
import Image from './image'

class Green extends Component {
	state = {image: 0}
	handleClick = (index) => {
		this.setState({image: index})
	}
	render = () => {
		return (
		<div className="grid-padding">
		<Grid handleClick={this.handleClick}/>
		<Image image={this.state.image} />
		</div>
		)
	}
}

export default Green