import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  Flex,
  Box,
  Text,
  Divider,
  useBreakpointValue,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Header } from '../components/Header';
import { Banner } from '../components/Home/Banner';
import { TravelTypes } from '../components/Home/TravelTypes';
import { ContinentSlider } from '../components/Home/ContinentSlider';

const Home: NextPage = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex overflowX='hidden' direction='column' h='100vh'>
      <Header />
      <Banner isWideVersion={ isWideVersion } />
      <TravelTypes isWideVersion={ isWideVersion } />

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

      <ContinentSlider onContinentClick={continent => console.log(continent)} />
    </Flex>
  );
};

export default Home;
