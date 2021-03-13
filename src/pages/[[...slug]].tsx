import { GetServerSideProps } from 'next';

interface IHomeProps {
  text: string;
  locale: string;
}

const Home: React.FC<IHomeProps> = (props) => {
  return (
    <div>
      <h1>catch-all-slug</h1>
      <h1>text --- {props.text}</h1>
      <h1>server side locale --- {props.locale}</h1>
    </div>
  );
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
