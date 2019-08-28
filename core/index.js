export const createAction = actionType => props => ({
  type: actionType,
  payload: props,
});

export const createReducer = (ini, ...fns) => (state = ini, action) =>
  fns.reduce((acc, fn) => fn(acc, action), state);

export const on = (typeCase, fn) => (state, { type, payload }) =>
  (type === typeCase && fn(state, payload)) || state;

export const maybe = value => fn => fn(value);
