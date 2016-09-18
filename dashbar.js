import React, {Component} from 'react'

import ToggleButton from './toggle-button'

class Dashbar extends Component {
	labels = ['Moisture', 'Humidity', 'Temperature', 'Greenness']
	render = () => (
		<div className="dashbar">
			<div className="button-container">
			{this.props.modules.map((module, index)=>{
				return <ToggleButton label={this.labels[index]} handleToggle={this.props.handleToggle} index={index} key={index} active={module}/>
			})}
			</div>
		</div>
		)
}

export default Dashbar