import PageNav from "../components/PageNav";
import styles from "./Pricing.module.css";

function Pricing() {
  return (
    <main className={styles.pricing}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            id dolores doloremque beatae minima eaque maiores ipsam enim
            repellendus mollitia.
          </p>
        </div>
        <img
          src="../img-2.jpg"
          alt="overview of a large city with skyscrapers"
        />
      </section>
    </main>
  );
}

export default Pricing;
