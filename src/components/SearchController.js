import { useState } from "react"
import Search from './Search'
import Results from "./Results"

function SearchController(){
    const [search, setSearch] =useState([])
    const [results, setResults] = useState([])

    async function handleSubmit(e){
        e.preventDefault()
        console.log(e)
        try{
            console.log('check players')
            const api_token='8J5v8UPD2G3nCu6yZUOYNCkxMX8SzUJ9GRFCGXhcIEufeQoBkyhkPKapzuzJ'
            const URL =`https://soccer.sportmonks.com/api/v2.0/players/search/${search}?api_token=${api_token}&per_page=40`
            const res = await fetch(URL)
            const data = await res.json()
            console.log(data.data)
            setResults(data.data.data)
            console.log(data.data.data)
        }
        catch(err){
            console.log(err)
        }
        }
        function inputChange(e){
            // console.log(e.value)
        setSearch(e.target.value)
        // console.log(e.target.value)
    }
    return(
        <>
            <Search handleSubmit={handleSubmit} inputChange={inputChange} search={search}/>
            <Results results={results} />
        </>
    )
}
export default SearchController