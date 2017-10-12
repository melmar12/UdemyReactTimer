var React = require('react');
var Clock = require('Clock');
//var TimerForm = require('TimerForm');
var Controls = require('Controls');

var Timer = React.createClass({
	getInitialState: function () {
		return {
			count: 0,
			timerStatus: 'cleared'
		};
	},
	componentDidUpdate: function (prevProps, prevState) {
		if (this.state.timerStatus !== prevState.timerStatus) {
			switch (this.state.timerStatus) {
				case 'started': 
					this.startTimer();
					break;
				case 'cleared':
					this.setState({count: 0});
				case 'paused': 
					clearInterval(this.timer);
					this.timer = undefined;
					break;
			}
		} 
	},
	handleStatusChange: function (newStatus) {
		this.setState({timerStatus: newStatus})
	},
	startTimer: function ()  {
		this.timer = setInterval(() => {
		  var newCount = this.state.count +1;
		  this.setState({
		  	count: newCount >= 0 ? newCount : 0
		  });
		}, 1000);
	},
	pauseTimer: function () {
		this.setState({timerStatus: 'paused'});
	},
	clearTimer: function () {
		this.setState({timerStatus: 'cleared'});
	},
	render: function () {
		var {count, timerStatus} = this.state;
		var renderControlArea = () => {
			if (timerStatus == 'started') {
				return (
					<div className="controls">
						<button className="button secondary expanded" onClick={()=>{this.pauseTimer()}}>Pause</button>
						<button className="button alert expanded" onClick={()=>{this.clearTimer()}}>Clear</button>
					</div>
				);
			} 
			if (timerStatus == 'paused') { 
				return (
					<div className="controls">
						<button className="button expanded" onClick={()=>{this.handleStatusChange('started')}}>Start</button>
						<button className="button alert expanded" onClick={()=>{this.clearTimer()}}>Clear</button>
					</div>
				);
		    } 
		    if (timerStatus == 'cleared') {
				return (
					<div className="controls">
						<button className="button expanded" onClick={()=>{this.handleStatusChange('started')}}>Start</button>
					</div>
				);
			}
		};
		return (
			<div className="timer">
				<h1 className="page-title">Timer</h1>
				<Clock totalSeconds={count}/>
				{renderControlArea()}
			</div>
		)
	}
});

module.exports = Timer;