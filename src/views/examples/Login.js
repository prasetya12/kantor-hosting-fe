
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Spinner,
  Alert
} from "reactstrap";

import {Link, Redirect} from 'react-router-dom'
import{connect} from 'react-redux'
import {login} from '../../redux/actions/userAction'

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state={
        email:'',
        password:'',
    }
  }

  onLogin=()=>{
    if(this.state.email.length>0 && this.state.password.length >0 ){
      const params = {
          email:this.state.email,
          password:this.state.password
      }
      this.props.login(params)
    }
  }

  render() {
    if(this.props.user.isLogin){
        return(
            <Redirect to="/admin/index"/>
        )
    }else{
      return (
        <>
          <Col lg="5" md="7">
            <Card className="bg-secondary shadow border-0">
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center">
                      <img
                        alt="..."
                        src={require("../../assets/img/brand/kantorhosting.png")}
                      />
                </div>
                {
                  this.props.user.isError&&
                  <Alert color="danger">
                    Error — {this.props.user.data.message}
                  </Alert>
                }
                <Form role="form">
                  <FormGroup className="mb-3 mt-5">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Email" type="email" autoComplete="new-email" onChange={(e)=>{ this.setState({email:e.target.value})}}/>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Password" type="password" autoComplete="new-password" onChange={(e)=>{ this.setState({password:e.target.value})}}/>
                    </InputGroup>
                  </FormGroup>
                  
                  <div className="text-center">
                    <Button className="my-4" color="primary" type="button" onClick={this.onLogin}>
                    {this.props.user.isLoading?<Spinner size='sm' color="light" />:''}Sign in
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
            <Row className="mt-3">
              <Col xs="12">
                <small>Don't have an Account ?</small>
                <a
                  className="text-light"
                  href="/auth/register"
                >
                  <small> Create new account</small>
                </a>
              </Col>
            </Row>
          </Col>
        </>
      );
    }
   
  }
}



const mapStateToProps=(state)=>{
  return {
      user:state.userReducer
  };
}

const mapDispatchToProps = (dispatch)=>{
  return {
      login:(params)=>dispatch(login(params)),
      // clear:()=>dispatch(clearState)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
