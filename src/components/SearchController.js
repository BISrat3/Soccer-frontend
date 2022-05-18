import { useState } from "react"
import Search from './Search'
import Results from "./Results"
// require('dotenv').config()

function SearchController(props){
    let [search, setSearch] = useState([])
    // console.log(search)
    let [results, setResults] = useState([])

    async function handleSubmit(e){
        e.preventDefault()
        console.log(e)
        try{
            console.log('check players')
            const URL =`https://soccer.sportmonks.com/api/v2.0/players/search/${search}?api_token=${process.env.REACT_APP_API_TOKEN}&per_page=1`
            const res = await fetch(URL)
            const data = await res.json()
            // .then(json=>{
            //     json.forEach(players => {
            //         if(numberPlayer.length <20)
            //         numberPlayer.push(players) 
            //     });
            // })
            // const pageSize =25;
            // const page =1;
            // const pages = Math.ceil(data.length /pageSize)
            // const pageData = data.slice ((page * pageSize) - pageSize, page * pageSize)
            console.log('hello')
            console.log(data)
            setResults(data.data)
            console.log(data.data)
        }
        catch(err){
            console.log(err)
            // return <h1> We can't find a player</h1>
         }
        }
        function inputChange(e){
            // console.log(e.value)
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
