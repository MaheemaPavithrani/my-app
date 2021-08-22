import React from 'react'
import Link from 'next/link'


export const Header = () => {
    return (
        <div className="header">
            <div className="row">
                <div className="col-md-6">
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <a><h3>All Items</h3></a>
                    </Link> 
                </div>
                <div className="col-md-6">
                    <Link href="/fav" style={{ textDecoration: 'none' }}>
                        <a><h3>My Favourites</h3></a>
                    </Link>
                </div>

            </div>
            
        </div>
    )
}