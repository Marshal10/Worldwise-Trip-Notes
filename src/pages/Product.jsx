import PageNav from "../components/PageNav";
import styles from "./Pricing.module.css";

function Product() {
  return (
    <main className={styles.pricing}>
      <PageNav />
      <section>
        <img
          src="../public/img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWise.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
            temporibus. Ab quis iure tenetur voluptate earum. Quibusdam,
            repudiandae? Voluptate officia, numquam et iusto porro accusamus
            perspiciatis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
            quaerat tenetur, quibusdam laboriosam doloribus tempore! Minus eius
          </p>
        </div>
      </section>
    </main>
  );
}

export default Product;
