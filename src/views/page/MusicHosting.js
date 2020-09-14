import React from "react"


import {
    Card,
    Container,
    Row
} from 'reactstrap'
import Header from 'components/Headers/Header.js'


class CloudHosting extends React.Component{
    render(){
        return(
            <>
                <Header/>
                <Container>
                    <Row>
                        MusicHosting
                    </Row>
                </Container>
            </>
        )
    }
}

export default CloudHosting;