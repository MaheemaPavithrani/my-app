import React, { Component } from 'react';
import styles from '../styles/Home.module.css'
import { updateToFav } from '../services/ItemService'
import Image from 'next/image'


const Favourites = ({ favItems }) => {
    
    if (favItems.length === 0) {
        return <h1> No items in favourites</h1>
    }

    const  handleChange = (id, status) =>{
        var itemObj = { id: id, status: !status }
        updateToFav(itemObj)
            .then(response => {
                console.log(response);
            });
    }


        return (
            <div className="item_div">
            <div className={"row"}>
                    {favItems.map((item, i) => (

                        <div className={"col-md-4 item"} key={i}> 
                             
                             <Image
                                src={ item.imageUrl}
                                height={255} 
                                width={255} 
                            />
                            <h4>{item.name}</h4>
                            <input type="checkbox" value={item.id} checked={item.status} onChange={(e) => handleChange(item.id, item.status)}/>
                            {item.status === true && <i className="fa">&#xf004;</i>}
                        </div>
                    ))}
                </div>
            </div>
        )
    
}

export default Favourites;