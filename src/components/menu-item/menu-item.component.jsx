import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.scss'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='menu-item-bg' style={{ backgroundImage:`url(${imageUrl})` }}></div>
        <div className='menu-item-content'>
            <h1 className="menu-item-title">{title}</h1>
            <span className='menu-item-subtitle'>Shop Now</span>
        </div>
    </div>
) 
export default withRouter(MenuItem);