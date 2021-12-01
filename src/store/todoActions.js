export const toggle = id => ({
  type: 'TOGGLE',
  id
});

export const add = title => ({
  type: 'ADD',
  title
});

export const setVisibility = filter => ({
  type: 'SET_VISIBILITY',
  filter
});

