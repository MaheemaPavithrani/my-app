import React, {  useEffect, useReducer } from 'react';
import styles from '../styles/Home.module.css'
import { updateToFav } from '../services/ItemService'
import Image from 'next/image'
import 'font-awesome/css/font-awesome.min.css';

const  Items =({allItems})=> {


    const handleChange = (id, status) =>{
        var itemObj = { id: id, status: !status }
        updateToFav(itemObj)
            .then(response => {
                console.log(response);
            });
    }
        return (
                <div className="item_div">
                <div className={"row"}>
                    {allItems.map((item, i) => (

                        <div className={"col-md-4 item"} key={i}> 
                             
                             <Image
                                src={ item.imageUrl}
                                height={255} 
                                width={255} 
                            />
                            <h4>{item.name}</h4>
                            <input id="item" type="checkbox" value={item.id} checked={item.status} onChange={(e) => handleChange(item.id, item.status)} />
                            {item.status === false && <label for="item"> Add to Favourites</label>}
                            {item.status === true && <i className="fa">&#xf004;</i>}
                            
                      </div>
                    ))}
                </div>
                </div>
            )
    }

export default Items;