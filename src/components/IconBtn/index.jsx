import "./iconBtn.css";

const IconBtn = (props) => {
    return(
    <>
        <a href={props.link} target="blank">
            {props.children}
        </a>
    </>
    )
}

export default IconBtn;