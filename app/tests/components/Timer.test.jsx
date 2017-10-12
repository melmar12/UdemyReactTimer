var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
	it('should exist', () => {

	});

	it('should pause timer on paused status', () => {
		var timer = TestUtils.renderIntoDocument(<Timer/>);

		timer.handleSetTimer();

		setTimeout(() => {
		  timer.handleStatusChange('paused');
		  expect(timer.state.count).toBe(300000);
		}, 1001);
	});

	it('should clear timer on cleared status', () => {
		var timer = TestUtils.renderIntoDocument(<Timer/>);

		timer.setState({timerStatus: 'started'});

		setTimeout(() => {
		  //timer.setState({timerStatus: 'cleared'});
		  expect(timer.state.count).toBe(0);
		}, 1001);
	});

	it('should clear timer on 10 minute mark', () => {
		var timer = TestUtils.renderIntoDocument(<Timer/>);
		
		timer.setState({count: 5989});
		timer.setState({timerStatus: 'started'});

		setTimeout(() => {
			expect(timer.state.count).toBe(0);
			//expect(timer.state.timerStatus).toBe('cleared');  
		}, 1001);		
	});
});