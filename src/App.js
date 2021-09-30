import './App.css'
import TopBar from './topbar/topbar'



function App() {

  let menutopbar = [
    {type:'link', texto:'nome1', ender:'caminho 1'},
    {type:'link', texto:'nome2', ender:'caminho 2'},
    {type:'link', texto:'nome3', ender:'caminho 3'},
    {type:'link', texto:'nome4', ender:'caminho 4'},
    {type:'link', texto:'nome5', ender:'caminho 5'},
    {type:'link', texto:'nome6', ender:'caminho 6'},
    {type:'link', texto:'nome7', ender:'caminho 7'},
    {type:'link', texto:'nome8', ender:'caminho 8'}
]

  return (<>
    <TopBar itens={menutopbar}/>    
  </>);
}

export default App
