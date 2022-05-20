import { useState } from "react"
import Search from './Search'
import Results from "./Results"

function SearchController(props){
    let [search, setSearch] = useState([])
    let [results, setResults] = useState([])
    let [wrongResult, SetWrongResult] = useState(false)

    async function handleSubmit(e){
        e.preventDefault()
        try{
            const URL =`https://soccer.sportmonks.com/api/v2.0/players/search/${search}?api_token=${process.env.REACT_APP_API_TOKEN}&per_page=1`
            const res = await fetch(URL)
            const data = await res.json()
            if(!data.data.length){
                SetWrongResult(true)
            }
            else{ 
                SetWrongResult(false)
            }
            setResults(data.data)
        }
        catch(err){
            console.log(err)
            }
    }
    function inputChange(e){
        setSearch(e.target.value)
    }
    return(
        <>
            <Search handleSubmit={handleSubmit} inputChange={inputChange} search={search}/>
            <Results results={results} wrongResult={wrongResult} />
        </>
    ) 
}
export default SearchController
