import {Link} from 'react-router-dom'
function Results (props){
    // console.log(props)
   
    const ShowPlayer = props.results.map((profile, idx) => {
        return(
            <div className="column ">
                <Link to={`/players/${profile.player_id}/`}>
                    <h3 className ="index">{profile.common_name}
                    <img src={profile.image_path} alt={profile.common_name} key={idx} className="image-player" />
                    </h3> 
                </Link>
            </div>
            )        
        }
    )
    return(
        <>
        <div className ="container">
        {ShowPlayer}
        </div>
        </>
    )
}

export default Results