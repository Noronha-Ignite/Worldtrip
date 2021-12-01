import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Flex, Box, Text, Divider } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Header } from '../components/Header';
import { Banner } from '../components/Home/Banner';
import { TravelTypes } from '../components/Home/TravelTypes';
import { ContinentSlider } from '../components/Home/ContinentSlider';
import { useRouter } from 'next/router';
import { Continent } from '../continents';

const Home: NextPage = () => {
  const router = useRouter();

  const handleGoToContinent = (continent: Continent) => {
    router.push(`/continent/${continent.id}`)
  };

  return (
    <Flex overflowX='hidden' direction='column' h='100vh'>
      <Header />
      <Banner />
      <TravelTypes />

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

      <ContinentSlider onContinentClick={handleGoToContinent} />
    </Flex>
  );
};

export default Home;
