import React from 'react';
import { connect } from 'react-redux';
import { addMovementData } from '../../actions/movementActions.js';

class MovementForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			direction: '',
			duration: ''
		};	
	}

	handleChangeDirection = (e) => {
		this.setState({direction: e.target.value});
	}

	handleChangeDuration = (e) => {
		this.setState({duration: e.target.value});
	}

	onAddMovement = () => {
		const { direction, duration } = this.state;
		this.props.addMovementData({direction, duration});
	}

	render() {
		return (
			<div className="movement-form container-indent">
				<form>
					<label htmlFor="direction">
						Direction
						<select 
							name="direction"
							value={this.state.direction}
							onChange={this.handleChangeDirection}
						>
							<option value="top">top</option>
							<option value="down">down</option>
							<option value="left">left</option>
							<option value="right">right</option>
						</select>
					</label>
					<label htmlFor="duration">Duration
						<input 
							name="duration"
							type="text"
							placeholder="Type duration in seconds..."
							value={this.state.value}
							onChange={this.handleChangeDuration}
						>
						</input>
					</label>
					<button 
						type="button"
						onClick={this.onAddMovement}
					>Add</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		movementData: state.movement.movementData
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addMovementData: (direction, duration) => { 
			dispatch(addMovementData(direction, duration))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(MovementForm);