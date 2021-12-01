import { Flex, Text, Box, SimpleGrid, Image } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Header } from '../../components/Header';
import { Continent, getContinentById } from '../../continents';
import { useWideVersion } from '../../hooks/useWideVersion';
import Flag from 'react-country-flag';

interface ContinentPageProps {
  continent: Continent;
  imagePackBaseUrl: string;
}

export default function ContinentPage({ continent, imagePackBaseUrl }: ContinentPageProps) {
  const router = useRouter();
  const isWideVersion = useWideVersion();

  return (
    <Flex direction='column' overflowX='hidden'>
      <Header onGoBack={router.back} />

      <Flex
        bgImage={`${imagePackBaseUrl}/landing.png`}
        bgSize='cover'
        bgPosition='center'
        w='100%'
        height={['150', '325', '500']}
        p='16'
        justifyContent={isWideVersion ? 'flex-start' : 'center'}
        alignItems={isWideVersion ? 'flex-end' : 'center'}
      >
        <Text color='gray.50' fontWeight='600' fontSize={['24', '36', '48']}>
          {continent.label}
        </Text>
      </Flex>

      <Box px='4' py='6'>
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
      </Box>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const continentId = params?.continentId;
  const continent = getContinentById(Number(continentId));

  if (!continent)
    return {
      props: {},
      redirect: '/not-found',
    };

  return {
    props: {
      continent: continent,
      imagePackBaseUrl: `/images/${continent.name}`,
    },
    revalidate: 60 * 60 * 2, // 2 Hours
  };
};
