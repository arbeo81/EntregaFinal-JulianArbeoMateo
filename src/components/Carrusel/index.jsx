import Carousel from 'react-bootstrap/Carousel';
import styles from './carrusel.module.scss';

function UncontrolledExample() {
  return (
    <div>
        <img className={styles.img}
          src="https://stronglify-1.s3.sa-east-1.amazonaws.com/bbf/bebe-algodon.png"
          alt="First slide"
        />
        <h2 className={styles.h2}>Tienda de accesorios de BEBE</h2>
    
    </div>
  );
}

export default UncontrolledExample;