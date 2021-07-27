
import { ListItem, ListItemText, ListItemAvatar, Avatar, ListItemSecondaryAction} from '@material-ui/core';
import KitchenIcon from '@material-ui/icons/Kitchen';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

/**
 * Render basic information of product
 * @param {string} name
 * @param {string} mfr
 * @component
 * @example
 * return(<List>
            {products.map(product => {
                return <ProductItem 
                        name={product.name}
                        mfr={product.mfr}
                        key={product.name} />
            })}
        </List>) 
 */
const ProductItem = (props) =>{
    const manufacturer = (mfr)=>{
        switch(mfr){
        case 'A': return 'American Home Food Products';
        case 'G': return 'General Mills';
        case 'K': return 'Kelloggs';
        case 'N': return 'Nabisco';
        case 'P': return 'Post';
        case 'Q': return 'Quaker Oats';
        case 'R': return 'Ralston Purina';
        default: return '';
        }
    }
    return (
        <ListItem button component={RouterLink} to={`/view/${props.name}`}>
            <ListItemAvatar>
                <Avatar>
                    <KitchenIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                    primary={props.name}
                    secondary={manufacturer(props.mfr)}
                  />
            <ListItemSecondaryAction />
        </ListItem>
    )
}
ProductItem.propType = {
    name: PropTypes.string.isRequired,
    mfr: PropTypes.string.isRequired,
}

export default ProductItem;