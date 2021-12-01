import { Flex, Text } from '@chakra-ui/react';

export default function NotFound() {
  return (
    <Flex direction='column' w='100vw' h='100vh' justifyContent='center' alignItems='center'>
      <Text fontWeight='700' color='red.600' fontSize='48'>
        404
      </Text>
      <Text fontSize='32' fontWeight='600' color='gray.500'>
        Continente não encontrado
      </Text>
    </Flex>
  );
};
