import './link.css'

function Link(props){
    return (
        <a id='linktopbar' className={props.class} href={props.href}>{props.nomelink}</a>
    )
}

export default Link