import React, {Component} from 'react'

import Green from './green'

class Content extends Component {
	render = () => {
		return (
			<div>
			<div className="panel-container">
				{this.props.modules[0] ? <div className="module"> <iframe src="http://172.20.10.13:3000/dashboard-solo/db/new-dashboard?editorTab=Display&from=now-5m&to=now&panelId=1&theme=dark" frameBorder="0" width="100%" height="100%" frameborder="0"></iframe> </div> : null}
				{this.props.modules[1] ? <div className="module"> <iframe src="http://172.20.10.13:3000/dashboard-solo/db/new-dashboard?editorTab=Display&from=now-5m&to=now&panelId=2&theme=dark" frameBorder="0" width="100%" height="100%"></iframe> </div> : null}
				{this.props.modules[2] ? <div className="module"> <iframe src="http://172.20.10.13:3000/dashboard-solo/db/new-dashboard?editorTab=Display&from=now-5m&to=now&panelId=3&theme=dark" frameBorder="0" width="100%" height="100%"></iframe> </div> : null}
			</div>
			<div className="grid-container">
				{this.props.modules[3] ? <Green/> : null }
			</div>
			</div>
		)
	}
}

export default Content

