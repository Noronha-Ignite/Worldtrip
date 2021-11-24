import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Flex, Text } from '@chakra-ui/react';
import { A11y, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Continent, continents } from './continents';

interface ContinentSliderProps {
  onContinentClick?: (continent: Continent) => void;
}

export const ContinentSlider: React.FC<ContinentSliderProps> = ({ onContinentClick }) => {
  return (
    <Flex w='100%' maxWidth='1280px' margin='52px auto'>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        pagination={{ clickable: true }}
        navigation
        height={320}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.name}>
            <Flex
              onClick={onContinentClick && (() => onContinentClick(continent))}
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
  );
};
