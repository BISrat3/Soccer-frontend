function Results (props){
    // console.log(props)
    const ShowPlayer = props.results.map((img, idx) => {
        return(
            <div className ="home username" key={idx}>
                {/* <img src={img.image_path.url} alt={img.common_name}  key={idx}/> */}
                <p>{img.firstname}</p>
             </div>
        )        
    }
    )
    return(
        <>
        {ShowPlayer}
        </>
    )
}

export default Results