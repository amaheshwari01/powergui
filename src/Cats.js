import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
    Box,
} from '@chakra-ui/react'
export default function ClassList({ grades, path }) {
  const cats = grades[path[0]][path[1]][path[2]].GrList.categories;
  
  return (
  <>
      {/* // <p>{JSON.stringify(cats)}</p>
    // <p>hi</p> */}
         <Accordion allowToggle>
{cats.map((c,index) => 
          
<AccordionItem key={c}>
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
      {process.env.REACT_APP_TEST}
    </AccordionPanel>
  </AccordionItem>        
      )}
         </Accordion>
      </>

    );
}