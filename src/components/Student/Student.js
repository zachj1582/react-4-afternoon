import React, { Component } from 'react';
import axios from 'axios' 
import {Link} from 'react-router-dom'

export default class Student extends Component {
  constructor() {
    super()
    this.state = {
      studentInfo: {}
    }

  }
  componentDidMount = () => {
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`).then(res => {
      this.setState({studentInfo: res.data})
    }).catch(err => console.log(err))
  }

  goBack = () => {
    window.history.back()
  }

  render() {
    const {studentInfo} = this.state;
    return (
      <div className="box">
        <h1>Student</h1>
        <h1>{studentInfo.first_name} {studentInfo.last_name}</h1>
        <h3>Grade: {studentInfo.grade}</h3>
        <h3>Email: {studentInfo.email}</h3>
        <button onClick={this.goBack}>Back</button>
      </div>
    )
  }
}