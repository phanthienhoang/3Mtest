import React, { Component } from 'react';
import axios from "axios";
import { CustomInput} from 'reactstrap';

class index extends Component {
    constructor(){
        super();
        this.state = {
            answer: [],
            quesid: ''
        }
    }

    componentDidMount(){
        var a = this.props;
        axios.get(`https://3mtestapi.000webhostapp.com/api/answer/filter/${a.quesid}`)
        .then(res =>{
            this.setState({
                answer: res.data
            })
        })
        .catch(err => {
            console.log(err);
        });
      }
    render() {
       var elm = this.state.answer.map((ans)=>{
           return (
               <div key={ans.id}>
                   <CustomInput 
                        type="radio" 
                        id={ans.id} 
                        name={ans.question_id} 
                        label={ans.content} 
                   />                   
               </div>
           )
       })
        return (
            <div className="ml-5">
               {elm}
            </div>
        );
    }
}

export default index;