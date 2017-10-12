var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
	it('should exist', () => {
		expect(Timer).toExist();
	});

	it('should start timer on started status', (done) => {
		var timer = TestUtils.renderIntoDocument(<Timer/>);

		timer.setState({timerStatus: 'started'});

		setTimeout(() => {
		  expect(timer.state.count).toBe(1);
		  done();
		}, 1001);
	});

	it('should pause timer on paused status', (done) => {
		var timer = TestUtils.renderIntoDocument(<Timer/>);

		timer.setState({timerStatus: 'started'});

		setTimeout(() => {
		  timer.setState({timerStatus: 'paused'});
		  expect(timer.state.count).toBe(1);
		  done();
		}, 1001);
	});

	it('should clear timer on cleared status', (done) => {
		var timer = TestUtils.renderIntoDocument(<Timer/>);

		timer.setState({timerStatus: 'started'});

		setTimeout(() => {
		  timer.setState({timerStatus: 'cleared'});
		  expect(timer.state.count).toBe(0);
		  done();
		}, 1001);
	});
});