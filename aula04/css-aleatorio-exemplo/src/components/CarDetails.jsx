import styles from  './CarDetails.module.css';
import React from 'react'

const CarDetails = ({brand, model, color, milles, newCar}) => {
    return (
        <div>
            <div className={styles.card}>
            <h3>Brand: {brand}</h3>
            <h3>Model: {model}</h3>
            <h3>Color: {color}</h3>
            <h3>{milles} milles</h3>

            {newCar 
                ? <h3 className={styles.statusCar}>New Car</h3> 
                : <h3 className={styles.statusCar}>Used Car</h3>}
            </div>
        </div>
    )
}

export default CarDetails
