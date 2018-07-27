import React, { Component } from "react";

export default class Test extends Component {
  state = {
    test: "test"
  };

  componentDidMount() {
    console.log("Component did Mount");
  }
  UNSAFE_componentWillMount() {
    console.log("ComponentWillMount");
  }

  componentDidUpdate() {
    console.log("componentdidupdate");
  }

  UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    console.log("componentWillreceive props");
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    return {
      test: "something"
    };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("componentSnapshot");
  }

  render() {
    console.log("Component rendered");
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}
