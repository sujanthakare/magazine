import Head from 'next/head';
import { GetServerSideProps } from 'next';

interface IHomeProps {
  text: string;
}

const ClinicianIndex: React.FC<IHomeProps> = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      text: 'profession-index',
    },
  };
};

export default ClinicianIndex;
