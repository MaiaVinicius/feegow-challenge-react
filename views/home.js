import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  actionFetchSpecialties,
  actionFetchProfessionals,
  actionSetActiveSpecialty,
  actionAddSchedule
} from '../store/actions';

import Button from '../components/Button';
import Header from '../components/Header';
import ProfessionalCard from '../components/ProfessionalCard';
import Select from '../components/Select';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

const Title = styled.Text`
  color: #010101;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;
const Results = styled.View`
  margin-top: 20px;
  border-top: 1px solid #d2d2d2;
  padding: 15px 0;
`;

const Home = ({
  specialties,
  activeSpecialty,
  professionals,
  schedules,
  actionFetchSpecialties,
  actionFetchProfessionals,
  actionSetActiveSpecialty,
  actionAddSchedule
}) => {
  useEffect(() => {
    actionFetchSpecialties();
  });
  const handleSelect = id => {
    actionSetActiveSpecialty(id);
  };
  const handleSearch = () => {
    actionFetchProfessionals(activeSpecialty);
  };
  const handleSchedule = id => {
    actionAddSchedule(id);
  };
  return (
    <Layout title="LISTAGEM DE PROFISSIONAIS">
      <Select
        list={specialties.map(({ especialidade_id, nome }) => ({
          label: nome,
          value: especialidade_id,
        }))}
        active={activeSpecialty}
        style={{ marginTop: 30 }}
        onChange={handleSelect}
      />
      <Button
        style={{
          alignSelf: 'flex-end',
          marginTop: 20,
        }}
        onPress={handleSearch}>
        Buscar
      </Button>
      <Results>
        {professionals &&
          professionals.map(({ profissional_id, nome, CRM }) => (
            <ProfessionalCard
              id={profissional_id}
              name={nome}
              crm={CRM}
              spotlight={true}
              onSchedule={handleSchedule}
            />
          ))}
      </Results>
    </Layout>
  );
};

const mapStateToProps = state => ({
  specialties: state.specialties.list,
  activeSpecialty: state.specialties.active,
  professionals: state.professionals,
  schedules: state.schedules
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      actionFetchSpecialties,
      actionFetchProfessionals,
      actionSetActiveSpecialty,
      actionAddSchedule
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
