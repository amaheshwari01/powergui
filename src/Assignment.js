import { Card,Text,Box ,Flex, Spacer,  NumberInput,Tag,TagLabel,
  NumberInputField,Checkbox
} from '@chakra-ui/react'
import {useEffect,useState} from 'react';
export default function Assignment({ grades, path }) {
  // const cats = grades[path[0]][path[1]][path[2]].GrList.categories;
  const [assi, setAssi] = useState([]);
  useEffect(() => {
      const curpath = grades[path[0]][path[1]][path[2]].GrList;

    setAssi([])
    for (const [, [key,]] of Object.entries(Object.entries(curpath))) { 
      if (curpath[key].category === path[3]) {
        setAssi(g => [...g,
        
          {
          entered: curpath[key].missing !=="n/e",
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
        <Box pl={4} pb={1} key={c.name}>
        <Card boxShadow='xl' variant='filled' maxW={'xl'}>
            {/* <HStack p={3} overflow='hidden'> */}
            <Flex p={3}>
              <Checkbox defaultChecked>

              <Text textAlign={'right'} size='md'>{c.name}</Text>  
            </Checkbox>

              {c.missing &&
                <Tag size='sm' colorScheme='orange' borderRadius='full'>
                  <TagLabel>Missing</TagLabel>
                </Tag>
              }
              {!c.entered &&
                <Tag size='sm' colorScheme='green' borderRadius='full'>
                  <TagLabel>Not Entered</TagLabel>
                </Tag>
              }
              {c.exempt &&
                <Tag size='sm' colorScheme='yellow' borderRadius='full'>
                  <TagLabel>Exempt</TagLabel>
                </Tag>
              }
              {c.late &&
                <Tag size='sm' colorScheme='red' borderRadius='full'>
                  <TagLabel>Late</TagLabel>
                </Tag>
              }
              <Spacer />
              {!isNaN(c.score)&&!c.exempt && 
                <NumberInput disabled={false} size='xs' maxW={16} defaultValue={c.score} >
    <NumberInputField />
                </NumberInput>}
              {(isNaN(c.score) && c.exempt) &&
                <NumberInput disabled={true} size='xs' maxW={16}  >
    <NumberInputField />
                </NumberInput>
              }
               {(isNaN(c.score) && !c.exempt) &&
                <NumberInput disabled={false} size='xs' maxW={16}  >
    <NumberInputField />
                </NumberInput>
              }
              {(!isNaN(c.score) && c.exempt) &&
                <NumberInput disabled={true} size='xs' defaultValue={c.score} maxW={16}  >
    <NumberInputField />
                </NumberInput>
              }
              

                 /{ c.avaliable }

</Flex>
              
            {/* </HStack> */}
          </Card>
          </Box>
        )}
    </>

    );
}