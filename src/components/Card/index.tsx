import './styles.css'

import carImg from '../../assets/car.png';


export default function Card() {
  return (
    <div className='ct-card'>
      <img src={carImg} alt="carro" />
      <h3>Lorem ipsum dolor</h3>
    </div>
  );
}