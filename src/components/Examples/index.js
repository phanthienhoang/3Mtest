import React, { Component } from 'react';
import axios from "axios";
import Answer from '../Answers';

class index extends Component {
    constructor({match}){
        super({match});
        this.state = {
            question: [],
            catid: match.params.id
        }
    }

    componentDidMount(){
        axios.get(`https://3mtestapi.000webhostapp.com/api/question/filter/${this.state.catid}`)
        .then(res =>{
            this.setState({
                question: res.data
            })
        })
        .catch(err => {
            console.log(err);
        });
      }
      
    render() {
        var elmQues = this.state.question.map((question, index) => {
            return (
                <div key={question.id}>
                    <li>Cau {index+1}: {question.content}</li>
                    <Answer quesid={question.id}/>
                </div>    
            )
        })
        return (
            <div className="container">
                <ul className="list-group mt-3 ml-5">
                     {elmQues}               
                </ul>
            </div>
            
        );
    }
}

export default index;