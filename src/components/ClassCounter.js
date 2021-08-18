import React from "react";

export default class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrement() {
    this.setState({ counter: this.state.counter - 1 });
  }

  arrIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  arrDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <div>
          <button
            onClick={() => {
              this.setState({ counter: this.state.counter + 1 });
            }}
          >
            +
          </button>

          <button
            onClick={() => {
              this.setState({ counter: this.state.counter - 1 });
            }}
          >
            -
          </button>
        </div>

        <div>
          <button onClick={this.increment}>Increment</button>

          <button onClick={this.decrement}>Decrement</button>
        </div>

        <div>
          <button onClick={this.arrIncrement}>Increment Arrow Function</button>

          <button onClick={this.arrDecrement}>Decrement Arrow Function</button>
        </div>
      </div>
    );
  }
}
