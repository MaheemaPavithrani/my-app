import React, { Component } from 'react';
import  { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Header'
import  Items  from './Items'
import { getAllItems } from '../services/ItemService'
import styles from './layout.module.css'

const App = () =>{
    const [allItems,setAllItems] = useState([]);

   const getAll = () => {
        getAllItems()
            .then(all => {
                setAllItems(all)
            });
        console.log(allItems)
    }
    useEffect(() => {
      getAll();
    },[allItems])

        return (
            <div className="App">
                <div className="container-fluid mrgnbtm">

                    <Header></Header>
                    <div className={styles.allItem}>
                    <Items
                        allItems={allItems}
                    ></Items>
                </div>
                </div>
            </div>
        );
    
}


export default App;