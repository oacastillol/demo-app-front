
import { List, ListItem, ListItemText } from '@material-ui/core';

const ProductList = (props) =>{
    return(
        <List>
            <ListItem>
            <ListItemText
                    primary="Hello its a list"
                  />
            </ListItem>
            <ListItem>
            <ListItemText
                    primary="Hello its a list item"
                  />
            </ListItem>
        </List>
    )
}

export default ProductList;