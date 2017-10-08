var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Countdown = require('Countdown');

describe('Countdown', () => {
	it('should exist', () => {
		expect(Countdown).toExist();
	});

	describe('handleSetCountdown', () => {
		it('should set state to started and countdown', () => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(10);

			expect(countdown.state.count).toBe(10);
			expect(countdown.state.countdownStatus).toBe('started');
		
			setTimeout(() => {
				expect(countdown.state.count).toBe(9);
				//done(); // i think it works without this too?
			}, 1001);
		});

		it('should never set count less than zero', () => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(1);
		
			setTimeout(() => {
				expect(countdown.state.count).toBe(0);
				//done(); // i think it works without this too?
			}, 3001);
		});
		it('should pause countdown on paused status', () => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(3);
			countdown.handleStatusChange('paused');
			setTimeout(() => {
			  expect(countdown.state.count).toBe(3);
			  expect(countdown.state.countdownStatus).toBe('paused');
			  //done();
			}, 1001)
		});
		it('', () => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(3);
			countdown.handleStatusChange('stopped');
			setTimeout(() => {
			  expect(countdown.state.count).toBe(0);
			  expect(countdown.state.countdownStatus).toBe('stopped');
			  //done();
			}, 1001)
		});
	})
});