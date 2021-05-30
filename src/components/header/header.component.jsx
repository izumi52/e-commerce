import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>Shop</Link>
            <Link className='option' to='/shop'>Contact</Link>
            {   
                currentUser?
                <div className='option' onClick={() => auth.signOut()}>Sign out</div>
                :
                <Link className="option" to='/signin'>Sign in</Link>
            }
        <CartIcon />
        </div>
        {
            hidden?
            null :
            <CartDropdown />
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);