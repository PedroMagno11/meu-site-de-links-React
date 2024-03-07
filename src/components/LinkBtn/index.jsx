import "./LinkBtn.css";

const LinkBtn = (props) => {
    return(
        <a href={props.link} className="link-box" target="blank">{props.content}</a>
    )
}

export default LinkBtn;