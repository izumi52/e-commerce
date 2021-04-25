import React from 'react';
import './menu-item.scss'

const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`menu-item ${size}`}>
        <div className='menu-item-bg' style={{ backgroundImage:`url(${imageUrl})` }}></div>
        <div className='menu-item-content'>
            <h1 className="menu-item-title">{title}</h1>
            <span className='menu-item-subtitle'>Shop Now</span>
        </div>
    </div>
) 
export default MenuItem;