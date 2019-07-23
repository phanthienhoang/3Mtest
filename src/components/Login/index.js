import React from "react";

// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import { login } from "../UserFunctions/UserFunctions";

class index extends React.Component 
{ 
  constructor(){
    super();
    this.state = {
      email:'',
      password:'',
      errors : {}
    }
  }
  
  handleChange = (e) => {  
    this.setState({
        [e.target.name] : e.target.value
    });
  }
  
  handleLogin = (e) => {
    e.preventDefault();
    const user = {
      email : this.state.email,
      password: this.state.password
    }
    login(user).then(res=>{
      if(localStorage.getItem('usertoken')){
        this.props.history.push(`/index`)
      }
      else{
        alert("sai tài khoản hoặc mật khẩu")
      }
    })
  }

  render(){
  return (
    <>
      <div
        className="section section-image section-login"
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")"
        }}
      >
        <Container>
          <Row>
            <Col className="mx-auto" lg="4" md="8">
              <Card className="card-register"             
              style={{
                backgroundColor: '#384285'
                }}>
                <h3 className="title mx-auto">Welcome</h3>
                <div className="social-line text-center">
                  <Button
                    className="btn-neutral btn-just-icon mt-0"
                    color="facebook"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mt-0 ml-1"
                    color="google"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mt-0 ml-1"
                    color="twitter"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </div>
                <Form className="register-form" noValidate onSubmit = {this.handleLogin}>
                  <label>Email</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input 
                        placeholder="enter email"
                        type="email"
                        value = {this.state.email}
                        name="email"
                        onChange = {this.handleChange}
                        />
                  </InputGroup>
                  <label>Password</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-key-25" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                        placeholder ="enter password"
                        type="password"
                        value = {this.state.password}
                        name="password"
                        onChange = {this.handleChange}
                        />
                  </InputGroup>
                  <Button
                    block
                    className="btn-round"
                    color=""
                    type="submit"       
                  >
                    LogIn
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  )};
}

export default index;
