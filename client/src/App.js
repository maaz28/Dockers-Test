import React, { Component } from 'react'
import axios from 'axios';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      hits: "",
    };
  }

 async  componentDidMount() {
    var res =await axios.get('/api/getHits')
    if (res) {
      console.log('res', res)
      this.setState({hits:res.data.value})
    }
  }

 

  render() {
    const {hits}=this.state
    return (
      <div>
        <h1>{`No of hits ${hits}`}</h1>

      </div>
    )
  }
}



