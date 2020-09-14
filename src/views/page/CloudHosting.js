import React from "react"


import {
    Card,
    Container,
    Row,
    ListGroup,
    ListGroupItem
} from 'reactstrap'
import Header from 'components/Headers/Header.js'
import{connect} from 'react-redux'
import {getFiles} from '../../redux/actions/fileAction'
import ListFiles from '../../components/ListFiles'

class CloudHosting extends React.Component{
    constructor(props){
        super(props);
        this.state={
            token:''
        }
    }

    componentDidMount() {
        const data = JSON.parse(window.localStorage.getItem('token'))

        this.props.getFiles(data.user.token)
    }
    render(){
        const files = this.props.files.data
        return(
            <>
                <Header/>
                <Container style={{display:'flex',justifyContent:'center',marginTop:'20px',maxWidth:'900px'}} >
                    <ListFiles files={files}/>
                </Container>
            </>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        files:state.fileReducer
    };
  }
  
  const mapDispatchToProps = (dispatch)=>{
    return {
        getFiles:(token)=>dispatch(getFiles(token)),
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(CloudHosting);