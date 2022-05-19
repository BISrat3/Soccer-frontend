import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

function Search (props){

    return(
        <div className="search form">
            <Form className="d-flex ">
            <FormControl type="search" onInput={props.inputChange} 
                placeholder="please search a player name" className="me-2" aria-label="Search hidden"
                required value={props.search} /> 
            <Button onClick={props.handleSubmit} variant="outline-success" className="btn hidden">Search</Button>
            </Form>
        </div>   
    )
}

export default Search