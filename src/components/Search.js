import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"

function Search (props){
    // console.log(props)
    return(
        <section>
            
            <Form  className="d-flex" onSubmit={ (e)=> props.handleSubmit(e)} >
        {/* <FormControl type="search" placeholder="Search...."  className="me-2"
          aria-label="Search" onInput={ ()=>{
              {props.inputChange}
            } /> */}
            <input type="text" placeholder="Search..." onInput= { (e)=>
        
                props.inputChange(e)} 
            className="form-control input" value={props.search}/>
                <br />
                <Link to="/search">
            <Button variant="outline-success">Search</Button>
            </Link>
      </Form>
        </section>
        
    )
}

export default Search