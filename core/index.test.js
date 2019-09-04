const { createAction, createReducer, on, maybe } = require('./');

const initialState = { counter: 0 };
const finalState = { counter: 1 };

test("create action function", () => {
  expect(JSON.stringify(createAction("ADD")(1))).toBe(
    JSON.stringify({
      type: "ADD",
      payload: 1
    })
  );
});

test("create case action function", () => {
  expect(
    JSON.stringify(
      on("ADD", (state, payload) => ({
        ...state,
        counter: state.counter + payload
      }))(initialState, {
        type: "ADD",
        payload: 1
      })
    )
  ).toBe(JSON.stringify(finalState));
});

test("create reducer function", () => {
  expect(
    JSON.stringify(
      createReducer(
        initialState,
        on("ADD", (state, payload) => ({
          ...state,
          counter: state.counter + payload
        }))
      )(initialState, {
        type: "ADD",
        payload: 1
      })
    )
  ).toBe(JSON.stringify(finalState));
});

test("maybe value true", () => {
  expect(maybe(5)(value => (value ? value : 0))).toBe(5);
});

test("maybe value false", () => {
  expect(maybe(null)(value => (value ? value : 0))).toBe(0);
});
