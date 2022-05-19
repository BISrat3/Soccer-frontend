import {Link} from 'react-router-dom'

function Results (props){
   
    const ShowPlayer = props.results.map((profile, idx) => {
    return(
        <div className="column ">
            <Link to={`/players/${profile.player_id}/`} className='Link'>
                <h3 className ="index">{profile.common_name}<br /> <br />
                <img src={profile.image_path} alt={profile.common_name} key={idx} className="image-player" />
                </h3> 
            </Link>
        </div>
    )})
    return(
        <>
            {props.wrongResult ? (<h3 className ="error">Please type the correct name</h3>) : (null) } 
            <div className ="container">
                {ShowPlayer}
            </div>
        </>
    )
}

export default Results