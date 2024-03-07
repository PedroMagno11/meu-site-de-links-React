import "./linguagem.css";

const linguagem = (props) => {
    return(
        <div className="btn-lang" id={props.id}>
            <img className="img-lang" src={props.img} alt={props.name}/>
        </div>
    )
}

export default linguagem;