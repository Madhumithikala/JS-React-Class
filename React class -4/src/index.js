import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
let root = ReactDOM.createRoot(document.getElementById('root'))
//root.render("GM")
//root.render(<h1>Good Morning</h1>);
//root.render(<h1>GM</h1><h2>GA</h2>)
root.render(<div><h1>Madhu</h1><h2>GOOD MORNING</h2></div>)
root.render(<App/>)