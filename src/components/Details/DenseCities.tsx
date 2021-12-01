import { Flex, Text, SimpleGrid, Image } from '@chakra-ui/react';
import Flag from 'react-country-flag';

import useContinent from '../../contexts/useContinent';
import { useWideVersion } from '../../hooks/useWideVersion';

type DenseCitiesProps = {
  imagePackBaseUrl: string;
};

export default function DenseCities({ imagePackBaseUrl }: DenseCitiesProps) {
  const isWideVersion = useWideVersion();
  const { continent } = useContinent();

  return (
    <Flex mt='8' direction='column'>
      <Text mb='20px' as='h3' fontSize='24' color='gray.600' fontWeight='500'>
        Cidades +100
      </Text>
      <SimpleGrid minChildWidth='256px' gap='40px' justifyItems='center'>
        {continent.denseCities.map((city) => (
          <Flex
            key={city.imgKey}
            direction='column'
            w='256px'
            borderWidth='1px'
            borderColor='yellow.400'
            borderRadius='4px'
            bg='white'
            overflow='hidden'
          >
            <Image
              objectFit='cover'
              w='100%'
              h='173px'
              alt='Londres'
              src={`${imagePackBaseUrl}/cities/${city.imgKey}.png`}
            />

            <Flex justifyContent='space-between' alignItems='center' p='6'>
              <Flex direction='column'>
                <Text as='h4' fontWeight='500' fontSize='20' color='gray.600'>
                  {city.name}
                </Text>
                <Text as='h6' fontWeight='400' fontSize='16' color='gray.400'>
                  {city.country}
                </Text>
              </Flex>
              <Flag
                className='emojiFlag'
                countryCode={city.countryCode}
                svg
                style={{
                  width: '35px',
                  height: '35px',
                  borderRadius: '50%',
                }}
              />
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
