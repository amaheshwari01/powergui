import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
    Box,
} from '@chakra-ui/react'
import AssignmentList from './AssignmentList';
import{useState} from 'react';
export default function ClassList({ grades, path, setGrades}) {
  const cats = grades[path[0]][path[1]][path[2]].GrList.categories;
  const [,setcl] = useState(-1);
  return (
  <>
      {/* // <p>{JSON.stringify(cats)}</p>
    // <p>hi</p> */}
      <Accordion allowToggle onChange={(i) => setcl(i)}>
{cats.map((c,index) => 
          
  <AccordionItem key={c}>
    {/* {({ isExpanded }) => (
          <> */}
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
                    {c}
        </Box>
        <Box as="span" flex='1' >

                    Score : {((grades[path[0]][path[1]][path[2]].GrList[c+"Score"]/grades[path[0]][path[1]][path[2]].GrList[c+"Avaliable"])*100).toFixed(3)}
        </Box>
           
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <AssignmentList grades={grades} setGrades={setGrades} path={[...path, c]} />
      {/* } */}
        </AccordionPanel>
      {/* </>
    )} */}
  </AccordionItem>        
      )}
         </Accordion>
      </>

    );
}