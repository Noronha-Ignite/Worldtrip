import { Flex, Text } from '@chakra-ui/react';
import useContinent from '../../contexts/useContinent';
import { useWideVersion } from '../../hooks/useWideVersion';

type BannerProps = {
  backgroundImageSrc: string;
};

export default function Banner({ backgroundImageSrc }: BannerProps) {
  const isWideVersion = useWideVersion();
  const { continent } = useContinent();

  return (
    <Flex
      bgImage={backgroundImageSrc}
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
  );
}
