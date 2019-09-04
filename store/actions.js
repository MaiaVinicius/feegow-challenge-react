import { createAction } from '../core';

export const AppActionTypes = {
  FETCH_SPECIALTIES: '[App] FETCH_SPECIALTIES',
  FETCH_SPECIALTIES_SUCCEEDED: '[App] FETCH_SPECIALTIES_SUCCEEDED',
  FETCH_SPECIALTIES_FAILED: '[App] FETCH_SPECIALTIES_FAILED',
  SET_ACTIVE_SPECIALTY: '[App] SET_ACTIVE_SPECIALTY',
  FETCH_PROFESSIONALS: '[App] FETCH_PROFESSIONALS',
  FETCH_PROFESSIONALS_SUCCEEDED: '[App] FETCH_PROFESSIONALS_SUCCEEDED',
  FETCH_PROFESSIONALS_FAILED: '[App] FETCH_PROFESSIONALS_FAILED',
  ADD_SCHEDULE: '[App] ADD_SCHEDULE',
};

export const actionFetchSpecialties = createAction(
  AppActionTypes.FETCH_SPECIALTIES
);

export const actionSetActiveSpecialty = createAction(
  AppActionTypes.SET_ACTIVE_SPECIALTY
);

export const actionFetchProfessionals = createAction(
  AppActionTypes.FETCH_PROFESSIONALS
);

export const actionAddSchedule = createAction(
  AppActionTypes.ADD_SCHEDULE
);
