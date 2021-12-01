import React from 'react';
import { useDispatch } from 'react-redux';
import { withStyles } from '@mui/styles';
import { List, ListItem, ListItemButton, ListItemIcon, Checkbox, ListItemText } from '@mui/material';
import { toggle } from './todoSlice';


const Styles = () => ({
  listItemCompleted: {
    background: '#c8f1cf',
    marginBottom: 5
  },
  listItem: {
    marginBottom: 5
  }
})

const TodoList = ({ data, filter, classes }) => {
  const dispatch = useDispatch();
  let listData = data;
  if (filter === 'SHOW_OPEN') {
    listData = data.filter(todo => !todo.completed)
  }
  if (filter === 'SHOW_CLOSED') {
    listData = data.filter(todo => todo.completed)
  }
  return (
    <List>
      {
        listData.map((item, index) => (
          <ListItem
            key={`list${index}`}  
            disablePadding
            classes={{ root: item.completed ? classes.listItemCompleted : classes.listItem}}>
            <ListItemButton onClick={() => dispatch(toggle(item.id))} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={item.completed}
                  disableRipple
                  inputProps={{ 'aria-labelledby': item.id }}
                  tabIndex={-1}
                />
              </ListItemIcon>
              <ListItemText id={item.id} primary={item.title}/>
            </ListItemButton>
          </ListItem>
        ))
      }
    </List>
  )
}

export default withStyles(Styles)(TodoList);
