import Catalogue from '@/components/catalogue';
import { GetServerSideProps } from 'next';

interface IHomeProps {
  text: string;
  locale: string;
}

const Home: React.FC<IHomeProps> = (props) => {
  return <h1>HOME</h1>;
  // return <Catalogue />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params.slug as Array<string>;

  return {
    props: {
      text: slug ? slug.join(' -- ') : 'props-index',
      locale: context.locale,
    },
  };
};

export default Home;
