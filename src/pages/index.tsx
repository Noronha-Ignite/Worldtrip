import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  Flex,
  Image,
  Icon,
  Button,
  Box,
  Text,
  Grid,
  Stack,
  Divider,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FiChevronLeft } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper';
import type { NextPage } from 'next';

type Continents = {
  name: string;
  description: string;
  background: string;
};

const continents: Continents[] = [
  {
    name: 'Europa',
    description: 'O continente mais antigo.',
    background: 'images/europe/main.png',
  },
  {
    name: 'América do Sul',
    description: 'O continente mais natural.',
    background: 'images/south-america/main.png',
  },
  {
    name: 'América do Norte',
    description: 'A definição do primeiro mundo.',
    background: 'images/north-america/main.png',
  },
  {
    name: 'Ásia',
    description: 'O maior continente.',
    background: 'images/asia/main.png',
  },
  {
    name: 'África',
    description: 'O continente que os humanos nasceram.',
    background: 'images/africa/main.png',
  },
  {
    name: 'Oceânia',
    description: 'O continente mais novo.',
    background: 'images/oceania/main.png',
  },
];

const Home: NextPage = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex overflowX='hidden' direction='column' h='100vh'>
      <Flex p='10%' as='header' w='100vw' alignItems='center' justifyContent='center' py='7'>
        <Button bg='none' mr='auto' borderRadius='50%' w='8' h='10'>
          <Icon as={FiChevronLeft} fontWeight='bold' />
        </Button>

        <Image w={['32', '36', '40']} mr='auto' src='/images/logo.svg' alt='World Trip' />
      </Flex>

      <Flex position='relative' w='100%' px='5%' bgImage="url('/images/sky.png')">
        <Box w='100%' py='1.75rem'>
          <Text
            color='gray.50'
            fontWeight='500'
            fontSize={['1.25rem', '1.75rem', '1.75rem', '2.25rem']}
            lineHeight={['1.875rem', '2.675rem', '3.375rem']}
          >
            5 Continentes,
            {isWideVersion && <br />} infinitas possibilidades.
          </Text>
          <Text
            mt={['2', '4', '20px']}
            fontWeight='400'
            fontSize={['.875rem', '1rem', '1.25rem']}
            color='gray.200'
          >
            Chegou a hora de tirar do papel a viagem que você
            {isWideVersion && <br />} sempre sonhou.
          </Text>
        </Box>

        {isWideVersion && (
          <Image
            position='absolute'
            right='5%'
            bottom='-20px'
            h='230'
            alt='airplane'
            src='/images/airplane.svg'
          />
        )}
      </Flex>

      <Grid
        mb='12'
        mt='8'
        gap='2'
        justifyItems='center'
        templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
        w='100%'
      >
        <Stack alignItems='center' direction={isWideVersion ? 'column' : 'row'} maxW='140px' spacing='2'>
          {isWideVersion ? (
            <Image alt='Cocktail' src='images/cocktail.svg' />
          ) : (
            <Box bg='yellow.300' w='2' h='2' borderRadius='50%' />
          )}
          <Text fontWeight='500' fontSize='1.125rem' color='gray.700'>
            vida noturna
          </Text>
        </Stack>
        <Stack alignItems='center' direction={isWideVersion ? 'column' : 'row'} maxW='140px' spacing='2'>
          {isWideVersion ? (
            <Image alt='Surf' src='images/surf.svg' />
          ) : (
            <Box bg='yellow.300' w='2' h='2' borderRadius='50%' />
          )}
          <Text fontWeight='500' fontSize='1.125rem' color='gray.700'>
            praia
          </Text>
        </Stack>
        <Stack alignItems='center' direction={isWideVersion ? 'column' : 'row'} maxW='140px' spacing='2'>
          {isWideVersion ? (
            <Image alt='Building' src='images/building.svg' />
          ) : (
            <Box bg='yellow.300' w='2' h='2' borderRadius='50%' />
          )}
          <Text fontWeight='500' fontSize='1.125rem' color='gray.700'>
            moderno
          </Text>
        </Stack>
        <Stack alignItems='center' direction={isWideVersion ? 'column' : 'row'} maxW='140px' spacing='2'>
          {isWideVersion ? (
            <Image alt='Museum' src='images/museum.svg' />
          ) : (
            <Box bg='yellow.300' w='2' h='2' borderRadius='50%' />
          )}
          <Text fontWeight='500' fontSize='1.125rem' color='gray.700'>
            clássico
          </Text>
        </Stack>
      </Grid>

      <Stack alignItems='center' direction={isWideVersion ? 'column' : 'row'} maxW='140px' spacing='2' mx='auto'>
        {isWideVersion ? (
          <Image alt='Earth' src='images/earth.svg' />
        ) : (
          <Box bg='yellow.300' w='2' h='2' borderRadius='50%' />
        )}
        <Text fontWeight='500' fontSize='1.125rem' color='gray.700'>
          e mais...
        </Text>
      </Stack>

      <Box w='16' mx='auto'>
        <Divider mt='8' borderColor='gray.700' opacity='1' />
      </Box>

      <Box mt='6' w='100%' textAlign='center'>
        <Text color='gray.600' fontWeight='500' fontSize={['20', '24', '32']}>
          Vamos nessa?
        </Text>
        <Text color='gray.600' fontWeight='500' fontSize={['20', '24', '32']}>
          Então escolha seu continente
        </Text>
      </Box>

      <Flex w='100%' maxWidth='1280px' margin='0 auto' mt='52px'>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          pagination={{ clickable: true }}
          navigation
          height={320}
        >
          {continents.map((continent) => (
            <SwiperSlide key={continent.name}>
              <Flex
                cursor='pointer'
                direction='column'
                bg={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${continent.background})`}
                bgSize='cover'
                bgPosition='center'
                w='100%'
                h='320px'
                justifyContent='center'
                alignItems='center'
              >
                <Text color='gray.50' fontWeight='700' fontSize='24'>
                  {continent.name}
                </Text>
                <Text color='gray.50' fontWeight='700' fontSize='14'>
                  {continent.description}
                </Text>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Flex>
  );
};

export default Home;
