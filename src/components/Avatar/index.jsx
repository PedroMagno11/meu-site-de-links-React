import "./avatar.css";

const Avatar = (props) => {
    return(
        <>
        <img src={props.img} alt={props.name}/>
        </>
    )
}

export default Avatar;