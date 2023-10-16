import React, { Component } from 'react';

class MyComponent extends Component {
 constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
 }

 componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Count has been updated.');
    }
 }

 incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
 };

 render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment Count</button>
      </div>
    );
 }
}

export default MyComponent;