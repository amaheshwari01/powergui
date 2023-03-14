import { useEffect,useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Flex, Spacer,
    
} from '@chakra-ui/react'
import Cats from './Cats';
export default function ClassList({ grades, path }) {
  const [clas, setClasses] = useState([]);
  const [curclass, setcl] = useState(-1);

  useEffect(() => {
    

    setClasses([])
    
      for (const [index, [key,]] of Object.entries(Object.entries(grades[path[0]][path[1]]))) {
          if (grades[path[0]][path[1]][key].class !== "Open Period") {
              console.log(index, key);
              setClasses(g => [...g,
              {
                  class: key.split(" ")[0] + grades[path[0]][path[1]][key].class,
                  grade: grades[path[0]][path[1]][key].grade,
                  pth: [...path, key]
              }

              ]);
          }
      }
    

  }, [grades,path]);
    return (
        <Accordion allowToggle onChange={(i) => setcl(i)}>
{clas.map((c,index) => 
          
  <AccordionItem key={c.class}>
        {/* {console.log(c.class)} */}
        {/* {alert(c.class)} */}
    <h2>
      <AccordionButton >
            		{/* <Box > */}
            {/* <Flex p={3}> */}

        <Box  as="span" flex='1' textAlign='left'>
                    {c.class}
            </Box>
            {/* <Spacer /> */}
            <Box as="span" flex='1' >

                    Grade : {c.grade}
            </Box>
            {/* </Flex> */}
              {/* </Box> */}
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      {index === curclass &&
        <Cats grades={grades} path={c.pth} />
      }
    </AccordionPanel>
       
  </AccordionItem>        
      )}

        </Accordion>
    );
}