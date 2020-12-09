import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Student extends Component {
    constructor() {
        super()
        this.state = {
            studentInfo: {},
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params
        axios.get(`http://localhost:3005/students/${id}`).then(res => {
            this.setState({
                studentInfo: res.data,
            })
        })
    }

    render() {
        return (
            <div className='box'>
                <h1>Student</h1>
                <h1>
                    {this.state.studentInfo.first_name}
                    {this.state.studentInfo.last_name}
                </h1>
                <h3>{this.state.studentInfo.grade}</h3>
                <h3>{this.state.studentInfo.email}</h3>
            </div>
        )
    }
}
