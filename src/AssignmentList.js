
import { useEffect, useState } from 'react';
import Assignment from './Assignment';
export default function AssignmentList({ grades, path,setGrades }) {
  // const cats = grades[path[0]][path[1]][path[2]].GrList.categories;
  const [assi, setAssi] = useState([]);
  useEffect(() => {
      const curpath = grades[path[0]][path[1]][path[2]].GrList;

    setAssi([])
    for (const [, [key,]] of Object.entries(Object.entries(curpath))) { 
      if (curpath[key].category === path[3]) {
        setAssi(g => [...g,
        
          {
            entered: curpath[key].missing !== "n/e",
          path: [...path, key],
          name: curpath[key].name,
          score: parseInt(curpath[key].score),
          avaliable: curpath[key].totalp,
          missing: curpath[key].missing && curpath[key].missing !=="n/e",
          exempt:( curpath[key].exempt || !curpath[key].ingrade)&& curpath[key].missing !=="n/e",
          late: curpath[key].late&& curpath[key].missing !=="n/e",
          // pth: [...path, key]
        }
        ]);
      }
      
    }

  }, [grades,path]);
  return (
    <>
      {assi.map((c) =>
        <Assignment grades={grades} val={c} setGrades={setGrades} />
        )}
    </>

    );
}