import {Link} from 'react-router-dom'
function Results (props){
    // console.log(props)
    const ShowPlayer = props.results.map((profile, idx) => {
        return(
            <div className ="container">
                <Link to={`/players/${profile.player_id}/`}>
                <p className='username'> {profile.firstname}
                <img src={profile.image_path} alt={profile.common_name} key={idx} className="player-name"/>
                </p></Link>
            </div>
            )        
        }
    )
    return(
        <div>
        {ShowPlayer}
        </div>
    )
}

export default Results