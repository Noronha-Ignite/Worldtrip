import { useBreakpointValue } from '@chakra-ui/media-query';

export const useWideVersion = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return isWideVersion;
};
