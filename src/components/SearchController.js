import { useState } from "react"
import Search from './Search'
import Results from "./Results"

function SearchController(props){
    let [search, setSearch] = useState([])
    let [results, setResults] = useState([])

    async function handleSubmit(e){
        e.preventDefault()
        console.log(e)
        try{
            console.log('check players')
            const URL =`https://soccer.sportmonks.com/api/v2.0/players/search/${search}?api_token=${process.env.REACT_APP_API_TOKEN}&per_page=1`
            const res = await fetch(URL)
            const data = await res.json()
            console.log('hello')
            console.log(data)
            setResults(data.data)
            console.log(data.data)
        }
        catch(err){
            console.log(err)
            }
    }
    function inputChange(e){
        setSearch(e.target.value)
        console.log(e.target.value)
    }
    return(
        <>
            {/* <Link to={`/players/search/${props.fullname}`}> */}
            <Search handleSubmit={handleSubmit} inputChange={inputChange} search={search}/>
            <Results results={results} />
            {/* </Link> */}
        </>
    ) 
}
export default SearchController
