import { Grid, Flex } from '@chakra-ui/react';
import { TravelType } from './TravelType';

export const TravelTypes: React.FC = () => {
  return (
    <Flex direction='column' align='center'>
      <Grid
        mb='12'
        mt='8'
        gap='2'
        justifyItems='center'
        templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
        w='100%'
      >
        <TravelType
          label='vida noturna'
          imageSrc='images/cocktail.svg'
          imageAlt='Cocktail'
        />
        <TravelType
          label='praia'
          imageSrc='images/surf.svg'
          imageAlt='Surf'
        />
        <TravelType
          label='moderno'
          imageSrc='images/building.svg'
          imageAlt='Building'
        />
        <TravelType
          label='clássico'
          imageSrc='images/museum.svg'
          imageAlt='Museum'
        />
      </Grid>

      <TravelType
        label='e mais...'
        imageSrc='images/earth.svg'
        imageAlt='Earth'
      />
    </Flex>
  );
};
