import {useEffect,useState,useCallback} from 'react';
import gg from './testingData/grades.json';
import w from './weights.json';
import {
  Button,
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Nav from './Nav';
import Sems from './Sems';
function App() {
  const [grades, setGrades] = useState();
  // const[upgrades, setUpgrades] = useState(1);
    // const [calc, setClac] = useState();

    // const json;
  // const calc = false;

  // const getGr = () => (grades);
    // const getGr =() => (grades)

  const updx = useCallback((grades) => {
    let g = grades;
    
    // setGrades((g) => { setGr(g); return (g) })
    // console.log(grCopy)
    if (g) {
      let grCopy = JSON.parse(JSON.stringify(g));
      // console.log("run")

      for (const [, [key, value]] of Object.entries(Object.entries(grCopy.classes.s2))) {
        if (value.teacher !== "n/a" ) {
          const caty = value.GrList.categories;
          let gr = 0
          let wcount = 0;
          // console.log(caty);
          for (let i = 0; i < caty.length; i++) {
            if (value.GrList[caty[i] + "Avaliable"] > 0) { 
              // console.log(w[value.class][caty[i]],caty[i],value.GrList[caty[i] + "Score"]/value.GrList[caty[i]+"Avaliable"])
            wcount += w[value.class][caty[i]];
            gr += w[value.class][caty[i]] * (value.GrList[caty[i] + "Score"] / value.GrList[caty[i] + "Avaliable"])
          }
        }
          gr = gr / wcount;
          gr=(gr * 100).toFixed(3)
          grCopy.classes.s2[key].grade = gr.toString();
        console.log(value.class,gr)
          
      }
      }
      setGrades(grCopy);
            // console.log(grades)

    }
  }, []);

  // const updx = useCallback(() => { setUpgrades(upgrades + 1) },[upgrades]);
  useEffect(() => {
    setGrades(gg);

//     const formData = new FormData();

// formData.append('act', 'a.maheshwari');
// formData.append('pw', '');
// formData.append('req', 'grades');

// fetch('http://127.0.0.1:5000/', {
//     method: 'POST',
//     body: formData
// })
// .then(response => {
//       console.log('Response:', response)
//       return response.json();
// }).then(response => setGrades(response))
    updx(gg);
    // console.log(upgrades)
    
  }, [updx]);
  // console.log(upgrades)
  const updateGrades = () => {
    updx(grades);
    }
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      {/* <Button onClick={updateGrades}>hi</Button> */}
      {/* {grades && console.log("gg", (gg.classes))} */}
      {/* {console.log("gr", (grades))} */}
      
       {/* {grades && console.log("grades",(JSON.stringify(grades.classes)===JSON.stringify(gg.classes)))} */}

      {/* {console.log("gg",gg)} */}
      {grades && <Sems grades={grades} />}
    </ChakraProvider>
  );
}

export default App;
