import React, {Component} from 'react'

class Cell extends Component {
	render = () => {
		var style = {
			backgroundColor: 'green',
			opacity: (this.props.value/0.6) - 10*(0.45 - this.props.value)
		};
		return  <div onClick={this.props.handleClick} style={style} className="cell"> <div className="cell-text"> {this.props.value} </div> </div>
	}
}

export default Cell