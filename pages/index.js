import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Featured from '../components/Featured';
import PizzaList from '../components/PizzaList';
import axios from 'axios';

export default function Home({ pizzaList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="The best pizza in the town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const res = await axios.get('https://localhost:300/api/products');
//   return {
//     props: {
//       PizzaList: res.data,
//     },
//   };
// };
