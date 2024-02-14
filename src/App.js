import { useSelector,useDispatch } from "react-redux";
import { increment , decrement} from "./actions";

function App() {

const counter = useSelector(state=> state.count); 
const isLogged = useSelector(state=> state.isLogged); 
const dispatch = useDispatch();
return (
    <div className="App">

      <h1>React Redux Boom</h1>
      <button onClick={()=>dispatch(increment())}>+  </button><pre></pre>
      <h3>{counter}
      </h3>
      <button onClick={()=>dispatch(decrement())}>-</button>
      {!isLogged ?<h1>Your are not logged In </h1>: <h1>Your can see Now !!!</h1>}
    
    </div>
  );
}

export default App;
