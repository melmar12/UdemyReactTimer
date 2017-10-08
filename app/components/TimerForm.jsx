var React = require('react');

var TimerForm = React.createClass({
	onSubmit: function (e) {
		e.preventDefault();
		// var strSeconds = this.refs.seconds.value;

		// // prevents submission of alpha or alphanumeric strings
		// if (strSeconds.match(/^[0-9]*$/)) {
		// 	this.refs.seconds.value = '';
		// 	this.props.onSetCountdown(parseInt(strSeconds, 10));
		}
	},
	render: function () {
		return (
			<div className="timer-form">
				//<form ref="form" onSubmit={this.onSubmit}>
					<button className="button expanded" onClick={this.handleStatusChange('started')}>Start</button>
				//</form>
			</div>	
		);
	}
});

module.exports = TimerForm;