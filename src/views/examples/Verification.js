import React from 'react'
import { 
    CardBody,
    Col,
    Card,
    Row,
    Button,
    Spinner,
    Alert 
} from 'reactstrap'
import { verify} from '../../redux/actions/userAction'
import { connect } from 'react-redux'

class Verification extends React.Component{
    constructor(props){
        super(props)
        this.state={
            secretToken:''
        }
    }

    componentDidMount(){
        if(typeof this.props.match.params.secretToken !== 'undefined'){
            this.setState({
                secretToken:this.props.match.params.secretToken
            })
        }
    }

    onVerify=()=>{
        console.log(this.state.secretToken)
        this.props.verify(this.state.secretToken)
    }

    onConfirmFailed=()=>{
        this.props.history.push('/register');
    }

    onConfirm=()=>{
        this.props.history.push('/login');
    }

    render(){
        console.log(this.props.user)
        return(
            <>
                <Col lg="6" md="8">
                    <Card className="bg-secondary shadow border-0">
                        <CardBody className="px-lg-5 py-lg-5">
                            <div className="text-center mb-5">
                                 <img
                                    alt="brand"
                                    src={require("../../assets/img/brand/kantorhosting.png")}
                                 />
                            </div>
                            {
                                this.props.user.isVerify&&
                                <Alert color="success">
                                    Verification Successfully — Please <a href="/auth/login">Login</a>
                                </Alert>
                            }
                            {
                                this.props.user.isError&&
                                <Alert color="danger">
                                Error — Please Re-Registration.
                                </Alert>
                            }
                            <Row>
                                <Col className="text-title text-center">
                                    <p>Verify your email address</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="h5 text-content text-center">
                                        In order to start using Kantor Hosting account, you need to confirm your email address
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-center">
                                    <Button color="primary" className="btn-submit" onClick={this.onVerify} block>
                                    {this.props.user.isLoading?<Spinner color="light" />:'Verify Email Address'}
                                    </Button>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        user:state.userReducer
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        verify:(secretToken)=>dispatch(verify(secretToken))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Verification)