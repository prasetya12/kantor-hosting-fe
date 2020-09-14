import React from "react"
import {
    Card,
    Container,
    Row,
    ListGroup,
    ListGroupItem
} from 'reactstrap'

function ListFiles(props){
    const files = props.files
    const listFile = Object.values(files).map(function(file,i){
        return (
            <ListGroupItem style={{display:'flex',justifyContent:'space-between'}} key={i}>
                <div>
                    <i className="fa fa-file text-blue" aria-hidden="true"></i>
                    <span style={{marginLeft:"20px"}}>
                        {file.name}
                    </span>
                </div>
                <div style={{fontSize:'12px'}}>
                    {file.lastModified}
                </div>
            </ListGroupItem>
        )
    }
    )
    return (
        <ListGroup style={{width:'100%'}}>
            {listFile}
        </ListGroup>
        // {files.map((file,i)=>(
        //     <ListGroup style={{width:'100%'}}>
        //         <ListGroupItem style={{display:'flex',justifyContent:'space-between'}}>
        //             <div>
        //                 <i className="fa fa-file text-blue" aria-hidden="true"></i>
        //                 <span style={{marginLeft:"20px"}}>
        //                     {file.name}
        //                 </span>
        //             </div>
        //             <div style={{fontSize:'12px'}}>
        //                 One Time ago
        //             </div>
        //         </ListGroupItem>
        //     </ListGroup>
        // ))}
    )
}

export default ListFiles