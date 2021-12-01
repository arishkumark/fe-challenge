import React from 'react';
import { useDispatch } from 'react-redux';
import { withStyles } from '@mui/styles';
import { FormattedMessage } from "react-intl";
import { Box, List, ListItem, ListItemButton, ListItemIcon,
  Checkbox, ListItemText, CircularProgress, Typography } from '@mui/material';
import { toggle, updateTodos } from './todoSlice';


const Styles = () => ({
  listItemCompleted: {
    background: '#c8f1cf',
    marginBottom: 5
  },
  listItem: {
    marginBottom: 5
  },
  progress: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 100
  }
})

const TodoList = ({ data, filter, status, classes }) => {
  const dispatch = useDispatch();
  let listData = data;
  if (filter === 'SHOW_OPEN') {
    listData = data.filter(todo => !todo.completed)
  }
  if (filter === 'SHOW_CLOSED') {
    listData = data.filter(todo => todo.completed)
  }

  const handleChange = (data) => {
    // dispatch(updateTodos(data)) // update dynamically with loader
    dispatch(toggle(data.id))
  }
  if (status === 'pending') {
    return (
    <Box className={classes.progress}>
      <CircularProgress />
    </Box>)
  }

  if (status === 'error') {
    return (
    <Box className={classes.progress}>
      <Typography variant="h6">
        <FormattedMessage id="app.ERROR" />
      </Typography>
    </Box>)
  }
  return (
    <List>
      {
        listData.map((item, index) => (
          <ListItem
            key={`list${index}`}  
            disablePadding
            classes={{ root: item.completed ? classes.listItemCompleted : classes.listItem}}>
            <ListItemButton onClick={() => handleChange(item)} dense>
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
