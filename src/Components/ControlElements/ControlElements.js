import React from 'react';
import { connect } from 'react-redux';


class ControlElements extends React.Component {
	render() {
		return (
			<div className="control-elements container-indent">
				<button className="play btn-reset"></button>
				<button className="stop btn-reset"></button>
			</div>
		);
	}
}

export default connect()(ControlElements);