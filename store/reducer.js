import { AppActionTypes } from './actions';
import { createReducer, on, maybe } from '../core';

const initialState = {
  specialties: {
    active: 0,
    list: ['aaa'],
  },
  professionals: [],
  schedules: [],
};

export default createReducer(
  initialState,
  on(AppActionTypes.FETCH_SPECIALTIES_SUCCEEDED, (state, payload) => ({
    ...state,
    specialties: { ...state.specialties, list: payload },
  })),
  on(AppActionTypes.SET_ACTIVE_SPECIALTY, (state, payload) => ({
    ...state,
    specialties: { ...state.specialties, active: payload },
  })),
  on(AppActionTypes.FETCH_PROFESSIONALS_SUCCEEDED, (state, payload) => ({
    ...state,
    professionals: payload,
  })),
  on(AppActionTypes.ADD_SCHEDULE, (state, payload) => ({
    ...state,
    schedules: [
      ...state.schedules,
      ...maybe(state.professionals.find(
        professional =>
          professional.profissional_id === payload &&
          state.schedules.findIndex(
            schedule => schedule.profissional_id === payload
          ) === -1
      ))(value => value ? [value] : [])
    ],
  }))
);
