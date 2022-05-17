import {Link} from 'react-router-dom'
function Results (props){
    // console.log(props)
    const ShowPlayer = props.results.map((profile, idx) => {
        return(
            <div className ="container">
                <Link to={`/players/${profile.player_id}/`}>
                    <div className="column">
                    <h3 className ="index">{profile.common_name}
                    <img src={profile.image_path} alt={profile.common_name} key={idx} className="player-name" />
                    </h3> 
                    </div>
                </Link>
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