import React from 'react';
import styles from '../css/pages/ShoppingList.module.css';

const ShoppingList = () => {
  const items = [
    { name: 'Salmon', quantity: '200g' },
    { name: 'Avocado', quantity: '1 piece' },
    { name: 'Cucumber', quantity: '1 piece' },
    { name: 'Lime', quantity: '2 pieces' },
    { name: 'Mint', quantity: '50g' },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Shopping List</h1>
      <table className={styles.table}>
        <thead>
          <tr className={styles.thContainer}>
            <th>Products</th>
            <th>Number</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>
                <div className={styles.numberContainer}>
                  <div className={styles.numberBox}>{item.quantity}</div>
                </div>
              </td>
              <td>
                <button className={styles.button}>x</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingList;
