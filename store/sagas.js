import {
  take,
  takeEvery,
  takeLatest,
  fork,
  call,
  put,
  all,
} from 'redux-saga/effects';

import { AppActionTypes } from './actions';
import api from '../services/api';

const abc = {
  success: true,
  content: [
    {
      especialidade_id: 157,
      nome: 'Cirurgião dentista (endodontia)',
    },
    {
      especialidade_id: 98,
      nome: 'Médico dermatologista',
    },
  ],
};

const bcl = [
  {
    profissional_id: 19,
    nome: 'Andre de Paula',
    CRM: '11.11111-1',
    especialidades: [
      {
        especialidade_id: 5,
        nome_especialidade: 'Dermatologia',
        CBOS: 11111,
      },
    ],
  },
];

function* sagaFetchSpecialties({ payload }) {
  try {
    // const { data } = yield call(api.fetchSpecialties);
    yield put({
      type: AppActionTypes.FETCH_SPECIALTIES_SUCCEEDED,
      payload: abc.content,
    });
  } catch (e) {
    yield put({
      type: AppActionTypes.FETCH_SPECIALTIES_FAILED,
    });
  }
}

function* sagaFetchProfessionals({ payload }) {
  try {
    // const { data } = yield call(api.fetchSpecialties);
    yield put({
      type: AppActionTypes.FETCH_PROFESSIONALS_SUCCEEDED,
      payload: bcl,
    });
  } catch (e) {
    yield put({
      type: AppActionTypes.FETCH_PROFESSIONALS_FAILED,
    });
  }
}

function* watchFetchSpecialties() {
  yield takeLatest(AppActionTypes.FETCH_SPECIALTIES, sagaFetchSpecialties);
}

function* watchFetchProfessionals() {
  yield takeLatest(AppActionTypes.FETCH_PROFESSIONALS, sagaFetchProfessionals);
}

function* appSagas() {
  yield fork(watchFetchSpecialties);
  yield fork(watchFetchProfessionals);
}

export default function* rootSaga(services = {}) {
  yield all([appSagas()]);
}
