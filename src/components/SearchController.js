import { useState } from "react"
import Search from './Search'
import Results from "./Results"
// require('dotenv').config()

function SearchController(){
    const [search, setSearch] = useState([])
    console.log(search)
    const [results, setResults] = useState([])

    async function handleSubmit(e){
        e.preventDefault()
        console.log(e)
        try{
            console.log('check players')
            const URL =`https://soccer.sportmonks.com/api/v2.0/players/search/${search}?api_token=${process.env.REACT_APP_API_TOKEN}&per_page=10`
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
            // console.log(e.value)
        setSearch(e.target.value)
        console.log(e.target.value)
    }
    return(
        <div>
            <>
            <div >
                <Search handleSubmit={handleSubmit} inputChange={inputChange} search={search}/>
            </div>
                <Results results={results} />
            </>
        </div>
    )
       
}
export default SearchController