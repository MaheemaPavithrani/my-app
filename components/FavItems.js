import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { useState, useEffect } from 'react';
import { Header } from './Header'
import Favourites from './Favourites'
import { getAllFavourites } from '../services/ItemService'
import styles from './layout.module.css'

const FavItems = () =>{

    const [favItems,setFavItems] = useState([]);

    const getAllFav = () => {
        getAllFavourites()
            .then(all => {
                setFavItems(all)
            });
        console.log(favItems)
    }

    useEffect(() => {
      getAllFav();
    },[favItems])

        return (
            <div className="App">
                <div className="container-fluid mrgnbtm">
                    <Header></Header>
                    <div div className={styles.favItem}>
                    <Favourites
                        favItems={favItems}
                    ></Favourites>
                </div>
                   
                </div>

                
            </div>
        );
}

export default FavItems;