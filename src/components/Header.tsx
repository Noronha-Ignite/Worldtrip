import { Flex, Button, Icon, Image, Box } from '@chakra-ui/react';
import { FiChevronLeft } from 'react-icons/fi';

interface HeaderProps {
  onGoBack?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onGoBack }) => {
  return (
    <Flex p='10%' as='header' w='100vw' alignItems='center' justifyContent='center' py='7'>
      {onGoBack ? (
        <Button onClick={onGoBack} bg='none' mr='auto' borderRadius='50%' w='8' h='10'>
          <Icon as={FiChevronLeft} fontWeight='bold' />
        </Button>
      ) : (
        <Box mr='auto'></Box>
      )}

      <Image w={['32', '36', '40']} mr='auto' src='/images/logo.svg' alt='World Trip' />
    </Flex>
  );
};
