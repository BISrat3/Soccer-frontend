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
                placeholder="Search" className="me-2" aria-label="Search hidden"
                required value={props.search} /> 
                {/* <Link to={`/players/search/${props.search.fullname}`}> */}
            <Button onClick={props.handleSubmit} variant="outline-success" className="btn hidden">Search</Button>
                {/* </Link> */}
            </Form>
        </div>   
    )
}

export default Search