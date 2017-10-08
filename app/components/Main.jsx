var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
    return (
      <div>
        <div className="row">
          <div>
            <Navigation/>
            <div className="container">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    );
};

module.exports = Main;
