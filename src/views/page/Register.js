
import React from "react";
import { register} from '../../redux/actions/userAction'
import { connect } from 'react-redux'

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
  Alert,
  Col,
  Spinner
} from "reactstrap";

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      email:'',
      password:'',
      isAgree:false,
      passwordStrength:'',
      colorStrength:'primary',
      passwordMessage:''
    }
  }


  handlePassword=(event)=>{
    const password = event.target.value
    this.setState({password})
    const valStrength = this.checkPassword(password)
    
    if (password.length < 6) {
      this.setState({passwordMessage:"minimum number of characters is 6"})
    }else if(password.length > 12){
      this.setState({passwordMessage:"maximum number of characters is 12"})
    }else{
      this.setState({passwordMessage:""})
    }

    switch(valStrength){
      case 1:
        this.setState({passwordStrength:'Very Low',colorStrength:'danger'});
        break;
      case 2:
        this.setState({passwordStrength:'Low',colorStrength:'warning'});
        break;
      case 3:
        this.setState({passwordStrength:'High',colorStrength:'success'});
        break;
      case 4:
        this.setState({passwordStrength:'Very High',colorStrength:'primary'});
        break;
      default:
    }

  
  }

  checkPassword = (password)=>{
    var strength = 0;
    if (password.match(/[a-z]+/)) {
      strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
      strength += 1;
    }
    if (password.match(/[0-9]+/)) {
      strength += 1;
    }
    if (password.match(/[$@#&!]+/)) {
      strength += 1;

    }

    return strength;

  }

  onSubmit=()=>{

    if(this.state.username.length!=0 && this.state.email.length!=0 && this.state.password.length>6 && this.state.password.length<12 && this.state.isAgree){
      const params = {
          username:this.state.username,
          email:this.state.email,
          password:this.state.password
      }

      this.props.register(params)

    }
  }

  render() {
    console.log(this.props.user)
    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">

              <div className="text-center mb-5">
                    <img
                      alt="..."
                      src={require("../../assets/img/brand/kantorhosting.png")}
                    />
              </div>
              {
                this.props.user.isSuccess&&
                <Alert color="success">
                  Registration Successfully — please check your email
                </Alert>
              }
              {
                this.props.user.isError&&
                <Alert color="danger">
                  Error — {this.props.user.data.message}
                </Alert>
              }
              <Form role="form">
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Username" type="text" onChange={(e)=>{ this.setState({username:e.target.value})}} />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" autoComplete="new-email" onChange={(e)=>{this.setState({email:e.target.value})}}/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" autoComplete="new-password" onChange={this.handlePassword}/>
                  </InputGroup>
                  <small className="text-danger">{this.state.passwordMessage}</small>

                </FormGroup>
                <div className="text-muted font-italic">
                  <small>
                    password strength:{" "}
                    <span className={`text-${this.state.colorStrength} font-weight-700`}>{this.state.passwordStrength}</span>
                  </small>
                </div>
                <Row className="my-4">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="formAgree"
                        type="checkbox"
                        onChange={(e)=>{this.setState({isAgree:e.target.checked})}}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="formAgree"
                      >
                        <span className="text-muted">
                          I agree with the{" "}
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                    </div>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="button" onClick={this.onSubmit}>
                    {this.props.user.isLoading?<Spinner size='sm' color="light" />:''} Create an Account
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
               <small>Do you have an Account ?</small>
               <a
                className="text-light"
                href="/auth/login"
                // onClick={e => e.preventDefault()}
              >
                <small className="ml-2">Login</small>
              </a>
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}
const clearState = (dispatch)=>{
  return dispatch({type:"REGISTER_CLEAR"})
}

const mapStateToProps=(state)=>{
  return {
      user:state.userReducer
  };
}

const mapDispatchToProps=(dispatch)=>{
  return{
      // login:(params)=>dispatch(login(params)),
      register:(params)=>dispatch(register(params)),
      clear:()=>dispatch(clearState)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);
