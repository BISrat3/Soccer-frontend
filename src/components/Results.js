function Results (props){
    // console.log(props)
    const ShowPlayer = props.results.map((img, idx) => {
        return(
            <div className="white">
                <p>{img.firstname}</p>
                <img src={img.image_path.url} alt={img.common_name}  key={idx}/>
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