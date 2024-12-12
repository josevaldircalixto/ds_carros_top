import './styles.css'
import Header from "../../components/Header";
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import CardComment from '../../components/CardComment';



export default function Catalog() {
  return (
    <>
      <Header />
      <main className='ct-catalog-main'>
        <h2>Venha Nos Visitar</h2>
        <section id="ct-catalog-section">
          <Card />
          <Card />
        </section>

        <div className='ct-card-comment'>
          <h2>O que estão dizendo</h2>
          <CardComment />
          <CardComment />
          <CardComment />
          <CardComment />
          <CardComment />
          <CardComment />
        </div>
      </main>
      <Footer />
    </>
  );
}