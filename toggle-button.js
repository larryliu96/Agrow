import React, {Component} from 'react'

class ToggleButton extends Component {
	render = () =>  (
		<button onClick={() => this.props.handleToggle(this.props.index)} className={this.props.active ? 'toggle active' : 'toggle inactive'}> {this.props.label} </button>
	)
}

export default ToggleButton