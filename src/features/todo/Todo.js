import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@mui/styles';
import { Box, TextField, Button } from '@mui/material';
import { FormattedMessage } from "react-intl";
import Filter from './Filter';
import TodoList from './TodoList';
import { addTodo } from './todoSlice';

const Styles = theme => ({
  container: {
    marginTop: 50
  },
  inputWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 30,
    [theme.breakpoints.down(480)]: {
      flexDirection: 'column',
    }
  },
  textField: {
    minWidth: 350,
    [theme.breakpoints.down(480)]: {
      marginBottom: 30,
    }
  },
  btn: {
    [theme.breakpoints.down(480)]: {
      minHeight: 56,
    }
  }
})

const Todo = ({ classes }) => {
  const[inputVal, setInputVal] = useState('')
  const todos = useSelector(store => store.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addTodo(inputVal));
    setInputVal('');
  }

  return (
    <Box className={classes.container}>
      <Box className={classes.inputWrapper}>
        <TextField
          className={classes.textField}
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <Button
          className={classes.btn}
          disabled={!inputVal}
          variant="contained"
          onClick={handleAdd}
        >
          <FormattedMessage id="input.ADD" />
        </Button>
      </Box>
      <Filter data={todos.visibilityFilter} />
      <TodoList data={todos.list} filter={todos.visibilityFilter} />
    </Box>
  )
}

export default withStyles(Styles)(Todo);
