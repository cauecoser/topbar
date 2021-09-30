import './topbar.css'
import Link from './link/link'

function TopBar(props) {
    
    let bloco = []

    props.itens.map(x => {
        if (x.type==='link') {
            bloco.push(<Link nomelink={x.texto} href={x.ender}/>)
        }
    })

    return (<div className='divbloco'>{bloco}</div>)
}

export default TopBar