import { Flex, Box } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Header } from '../../components/Header';
import { Continent, getContinentById } from '../../continents';
import { useWideVersion } from '../../hooks/useWideVersion';
import Banner from '../../components/Details/Banner';
import LandingData from '../../components/Details/LandingData';
import DenseCities from '../../components/Details/DenseCities';
import { ContinentContextWrapper } from '../../contexts/useContinent';

interface ContinentPageProps {
  continent: Continent;
  imagePackBaseUrl: string;
}

export default function ContinentPage({ continent, imagePackBaseUrl }: ContinentPageProps) {
  const router = useRouter();
  const isWideVersion = useWideVersion();

  return (
    <Flex direction='column' overflowX='hidden'>
      <Header onGoBack={router.back} />

      <ContinentContextWrapper continent={continent} >
        <Banner backgroundImageSrc={`${imagePackBaseUrl}/landing.png`} />

        <Box maxW='1480px' w='100%' m='0 auto' px={isWideVersion ? '16' : '6'} py={isWideVersion ? '24' : '12'}>
          <LandingData />

          <DenseCities imagePackBaseUrl={imagePackBaseUrl} />
        </Box>
      </ContinentContextWrapper>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const continentId = params?.continentId;
  const continent = getContinentById(Number(continentId));

  if (!continent)
    return {
      props: {},
      redirect: '/not-found',
    };

  return {
    props: {
      continent: continent,
      imagePackBaseUrl: `/images/${continent.name}`,
    },
    revalidate: 60 * 60 * 2, // 2 Hours
  };
};
