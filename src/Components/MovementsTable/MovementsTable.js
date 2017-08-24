import React from 'react';
import { connect } from 'react-redux';


class MovementsTable extends React.Component {
	render() {
		const { movementData } = this.props;
		let tableData = movementData.map((movement, item) => {
			return (
				<tbody key={item}>
						<tr>
							<th>{item + 1}</th>
							<th>{movement.direction}</th>
							<th>{movement.duration} sec</th>
							<th>
								<li><a href="#">edit</a></li>
								<li><a href="#">delete</a></li>
							</th>
						</tr>
					</tbody>
			)
		});

		return (
			<div className="movements-table container-indent">
				<table>
					<thead>
						<tr>
							<th>№</th>
							<th>Direction</th>
							<th>Duration</th>
							<th>Edit</th>
						</tr>
					</thead>
					{tableData}
				</table>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		movementData: state.movement.movementData
	}
}

export default connect(mapStateToProps)(MovementsTable);