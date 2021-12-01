import { Flex, Text } from '@chakra-ui/react';
import useContinent from '../../contexts/useContinent';
import { useWideVersion } from '../../hooks/useWideVersion';

export default function LandingData() {
  const isWideVersion = useWideVersion();
  const { continent } = useContinent();

  return (
    <Flex w='100%' direction={isWideVersion ? 'row' : 'column'}>
      <Text fontWeight='400' fontSize='14' color='gray.600'>
        {continent.description}
      </Text>

      <Flex mt='4' justifyContent={['space-between', 'space-around']} w='100%'>
        <Flex p='0 4px' direction='column' textAlign={isWideVersion ? 'center' : 'start'}>
          <Text fontWeight='600' fontSize='24' color='yellow.400'>
            {continent.counts.countries}
          </Text>
          <Text fontWeight='400' fontSize='18' color='gray.600'>
            países
          </Text>
        </Flex>
        <Flex direction='column' textAlign={isWideVersion ? 'center' : 'start'}>
          <Text fontWeight='600' fontSize='24' color='yellow.400'>
            {continent.counts.languages}
          </Text>
          <Text fontWeight='400' fontSize='18' color='gray.600'>
            línguas
          </Text>
        </Flex>
        <Flex direction='column' textAlign={isWideVersion ? 'center' : 'start'}>
          <Text fontWeight='600' fontSize='24' color='yellow.400'>
            {continent.counts.denseCities}
          </Text>
          <Text fontWeight='400' fontSize='18' color='gray.600'>
            cidades +100
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
