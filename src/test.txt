
import './App.css';
import Home from './containers/Home/Home';

//1. ItemCounter la estrucuar de las carpetas, useState con dato simple
//2. UserForm useState con dictionario. 
//3. ConsoleRepeater useEffect / clean up
//useContext, React.memo

//Extra
//customHook!! useRef, useCallback, useMemo

function App() {
  return (
    <div className="App">
      {/* NavBar */}

      {/* Containers */}
      <Home greeting="Bienvenido!" />

      {/* Footer */}
    </div>
  );
}

export default App;
