import React, {Component} from 'react'

class Image extends Component {
	render() {
		let number = this.props.image+1
		let src = 'src/assets/' + number + '.png'
		console.log(src)
		return (
			<div className="block"> <img height="500px" width="600px" src={src}/> </div> 
		)
	}
}

export default Image