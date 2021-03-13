import Head from 'next/head';
import { GetServerSideProps } from 'next';

interface IHomeProps {
  text: string;
}

const Clinician: React.FC<IHomeProps> = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      text: `clinician-location-profession-${(context.params.slug as Array<string>).join('-')}`,
    },
  };
};

export default Clinician;
