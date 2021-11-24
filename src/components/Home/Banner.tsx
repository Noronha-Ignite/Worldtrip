import { Flex, Image, Box, Text } from '@chakra-ui/react';

interface BannerProps {
  isWideVersion?: boolean;
}

export const Banner: React.FC<BannerProps> = ({ isWideVersion }) => {
  return (
    <Flex position='relative' w='100%' px='5%' bgImage="url('/images/sky.png')">
      <Box w='100%' py='1.75rem'>
        <Text
          maxW='70%'
          color='gray.50'
          fontWeight='500'
          fontSize={['1.25rem', '1.75rem', '1.75rem', '2.25rem']}
          lineHeight={['1.875rem', '2.675rem', '3.375rem']}
        >
          5 Continentes,
          {isWideVersion && <br />} infinitas possibilidades.
        </Text>
        <Text
          maxW='70%'
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
  );
};
