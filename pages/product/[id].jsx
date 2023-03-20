import styles from '../../styles/Product.module.css';
import Image from 'next/image';
import { useState } from 'react';

const Product = () => {
  const pizza = {
    id: 1,
    img: '/img/pizza.png',
    name: 'Pizza',
    price: [20, 24, 27],
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, vel asperiores provident ipsa tempore at rem aperiam, saepe voluptatem, id eius voluptates unde dolore. Nobis sed sequi error dolores laboriosam',
  };

  const [size, setSize] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">double ingredients</label>
          </div>
        </div>
        <div className={styles.add}>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            defaultValue={1}
            className={styles.quantity}
          />
        </div>
      </div>
    </div>
  );
};

// export const getServerSideProps = async ({ params }) => {
//   const res = await axios.get(
//     `http://localhost:3000/api/products/${params.id}`
//   );
//   return {
//     props: {
//       pizza: res.data,
//     },
//   };
// };

export default Product;
