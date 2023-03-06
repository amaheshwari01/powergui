import {useEffect,useState} from 'react';
import gg from './testingData/grades.json';

import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Nav from './Nav';
import Sems from './Sems';
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
  // const updateGrades = (newGrades) => {
  //   setGrades(newGrades);
  // };
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      {grades && <Sems grades={grades} />}
    </ChakraProvider>
  );
}

export default App;
