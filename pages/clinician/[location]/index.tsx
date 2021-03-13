import Head from 'next/head';
import { GetServerSideProps } from 'next';

interface IHomeProps {
  text: string;
}

const LocationIndex: React.FC<IHomeProps> = (props) => {
  return (
    <div>
      <h1>location-index</h1>
      <h1>{props.text}</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      text: 'location-index',
    },
  };
};

export default LocationIndex;
