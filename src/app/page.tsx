import styles from '../styles/Home.module.css';
import Image from 'next/image'
// import ProductList from '../components/ProductList';

export default function Home() {
  return (
    <div className={styles.mainContent}>
      <section className={styles.slider}></section>
      <section className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <Image
              src="/assets/images/slide1.png"
              className="img-fluid"
              alt="Image 1"
            />
          </div>
          <div className="col-md-4">
            <Image
              src="/assets/images/slide2.png"
              className="img-fluid"
              alt="Image 2"
            />
          </div>
          <div className="col-md-4">
            <Image
              src="/assets/images/slide3.png"
              className="img-fluid"
              alt="Image 3"
            />
          </div>
        </div>
      </section>
      {/* <ProductList /> */}
    </div>
  );
}
