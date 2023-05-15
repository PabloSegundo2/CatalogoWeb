import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    categories: []
  }

  componentDidMount() {
    axios.get(`https://testapi.wapizima.com/api/products`)
      .then(res => {
        const categories = res.data;
        this.setState({ categories });
      })
  }

  render() {
    return (
      <ul>
        { this.state.categories.map(categories => <li>{categories.name}</li>)}
        { this.state.categories.map(categories => <li>{categories.name}</li>)}
        
      </ul>
    )
  }
}