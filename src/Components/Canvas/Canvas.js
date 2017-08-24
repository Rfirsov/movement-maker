import React from 'react';
import { connect } from 'react-redux';


class Canvas extends React.Component {
	render() {
		const { movementData } = this.props;
		const squareStyle = {
			left: '50px',
			transition: 'all 2s ease 0s'
		};

		return (
			<div className="canvas container-indent">
				<div className="square" style={squareStyle}>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		movementData: state.movement.movementData
	}
}


export default connect(mapStateToProps)(Canvas);