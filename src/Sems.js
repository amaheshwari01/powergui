import {
  
Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/react';
import ClassList from './ClassList';
import { useState } from 'react';
export default function Sems({grades, setGrades}) { 
  const [sem, setSem] = useState(1);
  // console.log(hi)

    return (
      <Tabs pt={2} variant='enclosed' defaultIndex={1} onChange={(index) => setSem(index)}>

      <TabList>
        <Tab>Semester 1</Tab>
        <Tab>Semester 2</Tab>
      </TabList>

      <TabPanels>
          <TabPanel>
            {sem === 0 &&
              // "hi"
              // JSON.stringify(grades)
              < ClassList grades={grades}  setGrades={setGrades} path={["classes", "s1"]}  />
              }
        </TabPanel>
          <TabPanel>
                          {sem===1&&
                            
              < ClassList grades={grades} setGrades={setGrades} path={["classes", "s2"]}/>
                          }
        </TabPanel>
       
      </TabPanels>
    </Tabs>
    )
}
