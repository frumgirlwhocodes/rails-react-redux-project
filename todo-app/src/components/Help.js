import React, { Component } from 'react'

class Help extends Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <h1>Help</h1>
                  <h2> Insturctions</h2>
                  <p> 1: To create a new Task add a title and a date in the places indicated and press add</p>
                  <p> 2: To check off a task press on a box and a green arrow should appear </p>
                  <p> 3: When you do not want a task there anymore, press the delete button </p>
                  <h3> If you have anymore questions, please email LiebaHinda@gmail.com</h3>
                </div>
            </div>
        )
    }
}

export default Help;