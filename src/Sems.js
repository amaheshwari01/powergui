import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import ClassList from './ClassList';

 
export default function Sems(grades) {
 
 
return (
 
    <Tabs value="html" >
        <div className="flex flex-col w-80 pl-5 gap-6">
  <TabsHeader>
    <Tab key={"s1"} value={"s1"}>
        Semester 1
                </Tab>
                <Tab key={"s2"} value={"s2"}>
        Semester 2
      </Tab>
            </TabsHeader>
            </div>
  <TabsBody>
      <TabPanel key={"s1"} value={"s1"}>
        <ClassList Semester={grades.grades.s1} />
      </TabPanel>
    <TabPanel key={"s2"} value={"s2"}>
        <ClassList  Semester={grades.grades.s2} />
    </TabPanel>
    
  </TabsBody>
</Tabs>
); }
 