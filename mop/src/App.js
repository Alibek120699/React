import React, { Component } from "react";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      categories: [],
    }
  }

  componentDidMount(){
    fetch('/api/categories')
      .then(res => res.json())
      .then(categories => this.setState({categories}))
  }

  render(){
    return (
      <div>
        {this.state.categories.map(c => 
          <h2 key={c.id}>{c.name}</h2>)}
      </div>
    );
  }
}