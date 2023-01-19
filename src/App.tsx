import { Habit } from './components/Habit'
import './styles/global.css';

function App() {
  

  return (
    <div>
   <Habit completed={5}/>
   <Habit completed={15}/>
   <Habit completed={50}/>

   </div>
  )
}

export default App
