import Image from 'next/image';
import styles from '../styles/PizzaCard.module.css';
import Link from 'next/link';

const PizzaCard = ({ pizza }) => {
  return (
    <div className={styles.container}>
      {/* <Link href={`/product/${pizza._id}`} passHref>
      </Link> */}
      <Image src="/img/pizza.png" alt="" width="100" height="100" />
      <h1 className={styles.title}>Sheeshh</h1>
      <span className={styles.price}>250 rs</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit,amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default PizzaCard;
