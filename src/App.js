import './App.css';
import Sems from './Sems';
import Nav from './Nav';
import { useEffect, useState } from 'react';
import gg from './testingData/grades.json';
function App() {
  const [grades, setGrades] = useState();

  useEffect(() => {
    // console.log(gg)
    setGrades(gg)
    // POST request using fetch inside useEffect React hook
    // fetch('https://powerscraper-hxj7vhwn5a-wl.a.run.app/', {
    // method: 'POST',
    
    // body: new URLSearchParams({
    //     'act': 'a.maheshwari',
    //     'pw': '',
    //     'req': 'grades'
    // })
    // }).then((response) => response.json()).then((data) => setGrades(data));
    
  }, []);
  return (
    <div className="App">
          <Nav />
      {grades && <Sems grades={grades.classes} />}
        
     
      {!grades && 'Loading...'}
    </div>
  );
}

export default App;
