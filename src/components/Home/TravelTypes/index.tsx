import { Grid, Flex } from '@chakra-ui/react';
import { TravelType } from './TravelType';

interface TravelTypesProps {
  isWideVersion?: boolean;
}

export const TravelTypes: React.FC<TravelTypesProps> = ({ isWideVersion }) => {
  return (
    <Flex direction='column' align='center' >
      <Grid
        mb='12'
        mt='8'
        gap='2'
        justifyItems='center'
        templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
        w='100%'
      >
        <TravelType
          isWideVersion={isWideVersion}
          label='vida noturna'
          imageSrc='images/cocktail.svg'
          imageAlt='Cocktail'
        />
        <TravelType
          isWideVersion={isWideVersion}
          label='praia'
          imageSrc='images/surf.svg'
          imageAlt='Surf'
        />
        <TravelType
          isWideVersion={isWideVersion}
          label='moderno'
          imageSrc='images/building.svg'
          imageAlt='Building'
        />
        <TravelType
          isWideVersion={isWideVersion}
          label='clássico'
          imageSrc='images/museum.svg'
          imageAlt='Museum'
        />
      </Grid>

      <TravelType
        isWideVersion={isWideVersion}
        label='e mais...'
        imageSrc='images/earth.svg'
        imageAlt='Earth'
      />
    </Flex>
  );
};
