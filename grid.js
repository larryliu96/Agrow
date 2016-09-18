import React, {Component} from 'react'

import Cell from './cell'

class Grid extends Component {
	cells = [[0.41, 0.42, 0.41], [0.40, 0.43, 0.42], [0.42, 0.43, 0.44]]
	render = () => (
		<div className="grid">
			<div className="row">
			{this.cells[0].map((cell, index)=>{
				return <Cell handleClick={() => this.props.handleClick(index)} index={index} value={cell}/>
			})}
			</div>
			<div className="row">
			{this.cells[1].map((cell, index)=>{
				return <Cell handleClick={() => this.props.handleClick(index+3)} index={index} value={cell}/>
			})}
			</div>
			<div className="row">
			{this.cells[2].map((cell, index)=>{
				return <Cell handleClick={() => this.props.handleClick(index+6)} index={index} value={cell}/>
			})}
			</div>
		</div>
	)
}

export default Grid