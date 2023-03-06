import {
  
Tabs, TabList, TabPanels, Tab, TabPanel ,
} from '@chakra-ui/react';
import ClassList from './ClassList';
export default function Sems(grades) { 

    return (
        
      <Tabs pt={2} variant='enclosed'>
      <TabList>
        <Tab>Semester 1</Tab>
        <Tab>Semester 2</Tab>
      </TabList>

      <TabPanels>
                <TabPanel>
                    <ClassList grades={grades.grades}   path={["classes","s1"]}  />
        </TabPanel>
                <TabPanel>
                    <ClassList grades={grades.grades}  path={["classes","s2"]}/>
        </TabPanel>
       
      </TabPanels>
    </Tabs>
    )
}
