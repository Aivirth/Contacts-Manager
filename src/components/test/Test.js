import React, { Component } from "react";

export default class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => res.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      )
      .catch(err => console.log(err));
  }
  // UNSAFE_componentWillMount() {
  //   console.log("ComponentWillMount");
  // }

  // componentDidUpdate() {
  //   console.log("componentdidupdate");
  // }

  // UNSAFE_componentWillReceiveProps(nextProps, nextState) {
  //   console.log("componentWillreceive props");
  // }

  // static getDerivedStateFromProps(nextProps, nextState) {
  //   return {
  //     test: "something"
  //   };
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("componentSnapshot");
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}
