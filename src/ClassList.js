import { useEffect, useState } from 'react';
import {
  Accordion,
  // AccordionHeader,
  AccordionBody,
  Button,
} from "@material-tailwind/react";
 

function CLassList(Semester) {
  const [clas, setClasses] = useState([]);
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  // useEffect(() => {
    

  //   setClasses([])
  //   // for (const key in Semester.Semester) {
  //   for (const [index, [key,]] of Object.entries(Object.entries(Semester.Semester))) {
  //     console.log(index, key);
  //     setClasses(g => [...g,
  //       {
  //         class: key.split(" ")[0] + Semester.Semester[key].class,
  //         grade:Semester.Semester[key].grade
  //       }

  //     ]);
  //     }
    

  // }, [Semester]);

 
  return (
    <div>
      {clas.map((c,index) => {
        console.log(c)
        return(
          <Accordion open={open === index + 1} className="pb-2">
            <Button
              className=" w-1/4 "
              onClick={() => handleOpen(index + 1)}>
              <p className='text-left'>
                {c.class}
                
              </p>
              <p className="float-right">
                  Grade:{c.grade}
                   </p>
            </Button>
            <AccordionBody>
              lol
            </AccordionBody>
          </Accordion>
      
        )
      })}
    </div>
  );
}

export default CLassList;
