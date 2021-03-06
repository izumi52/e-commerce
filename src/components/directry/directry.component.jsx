import React from 'react'; 
import MenuItem from '../menu-item/menu-item.component'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import './directory.scss'

const Directory = ({sections}) => (
    <div className='directory_menu'>
        {
            sections.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))
        }
    </div>
)
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);