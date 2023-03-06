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
    // const json;
  

  useEffect(() => {

    const formData = new FormData();

formData.append('act', '');
formData.append('pw', '');
formData.append('req', 'grades');

fetch('http://127.0.0.1:5000/', {
    method: 'POST',
    body: formData
})
.then(response => {
      console.log('Response:', response)
      return response.json();
}).then(response => setGrades(response))
  }, []);
  // const updateGrades = (newGrades) => {
  //   setGrades(newGrades);
  // };
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      {/* {grades && console.log("gg", (gg.classes))} */}
      {console.log("gr", (grades))}
      
       {/* {grades && console.log("grades",(JSON.stringify(grades.classes)===JSON.stringify(gg.classes)))} */}

      {/* {console.log("gg",gg)} */}
      {grades && <Sems grades={grades} />}
    </ChakraProvider>
  );
}

export default App;
