import React, { Component } from "react";
import axios from 'axios';
// reactstrap components
import { Container, Row } from "reactstrap";
import CategoryItem from '../CategoryItem';

class index extends Component {
  constructor() {
    super();
    this.state = {
      category: []
    }
  }

  componentDidMount(){
    axios.get('https://3mtestapi.000webhostapp.com/api/category')
    .then(res =>{
        this.setState({category: res.data});
    })
  }

  render() {
    var elmCategory = this.state.category.map((category) => {
      return (
        <CategoryItem 
            key = { category.id }
            category = { category }
           
        />    
      )
    });
    return (
      <>
        <div className="section section-dark">
          <Container>
            <Row className="example-page">
              { elmCategory }
            </Row>
          </Container>
        </div>{" "}
      </>
    );
  }
}

export default index;
