import { Stack, Image, Box, Text } from '@chakra-ui/react';
import { useWideVersion } from '../../../hooks/useWideVersion';

interface TravelTypeProps {
  imageSrc: string;
  label: string;
  imageAlt?: string;
}

export const TravelType: React.FC<TravelTypeProps> = ({
  label,
  imageSrc,
  imageAlt,
}) => {
  const isWideVersion = useWideVersion();

  return (
    <Stack
      alignItems='center'
      direction={isWideVersion ? 'column' : 'row'}
      maxW='140px'
      spacing='2'
    >
      {isWideVersion ? (
        <Image alt={imageAlt} src={imageSrc} />
      ) : (
        <Box bg='yellow.300' w='2' h='2' borderRadius='50%' />
      )}
      <Text fontWeight='500' fontSize='1.125rem' color='gray.700'>
        {label}
      </Text>
    </Stack>
  );
};
