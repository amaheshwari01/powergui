import { Card,Text,Box ,Flex, Spacer,  NumberInput,Tag,TagLabel,
  NumberInputField,Checkbox
} from '@chakra-ui/react'
// import {useEffect,useState} from 'react';
export default function Assignment({ grades, val,setGrades }) {
  
  return (
    <>
      <Box pl={4} pb={1} key={val.name}>
        <Card boxShadow='xl' variant='filled' maxW={'xl'}>
            {/* <HStack p={3} overflow='hidden'> */}
            <Flex p={3}>
              <Checkbox defaultChecked>

              <Text  size='md'>{val.name}</Text>  
              </Checkbox>
              {/* tags */}
              <>
              {val.missing &&
                <Tag size='sm' colorScheme='orange' borderRadius='full'>
                  <TagLabel>Missing</TagLabel>
                </Tag>
              }
              {!val.entered &&
                <Tag size='sm' colorScheme='green' borderRadius='full'>
                  <TagLabel>Not Entered</TagLabel>
                </Tag>
              }
              {val.exempt &&
                <Tag size='sm' colorScheme='yellow' borderRadius='full'>
                  <TagLabel>Exempt</TagLabel>
                </Tag>
              }
              {val.late &&
                <Tag size='sm' colorScheme='red' borderRadius='full'>
                  <TagLabel>Late</TagLabel>
                </Tag>
                }
              </>  
              <Spacer />
              {!isNaN(val.score)&&!val.exempt && 
                <NumberInput disabled={false} size='xs' maxW={16} defaultValue={val.score} >
    <NumberInputField />
                </NumberInput>}
              {(isNaN(val.score) && val.exempt) &&
                <NumberInput disabled={true} size='xs' maxW={16}  >
    <NumberInputField />
                </NumberInput>
              }
               {(isNaN(val.score) && !val.exempt) &&
                <NumberInput disabled={false} size='xs' maxW={16}  >
    <NumberInputField />
                </NumberInput>
              }
              {(!isNaN(val.score) && val.exempt) &&
                <NumberInput disabled={true} size='xs' defaultValue={val.score} maxW={16}  >
    <NumberInputField />
                </NumberInput>
              }
              

                 /{ val.avaliable }

</Flex>
              
            {/* </HStack> */}
          </Card>
          </Box>
      
    </>

    );
}