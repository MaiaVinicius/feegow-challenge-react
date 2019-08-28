import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*import {
} from '../store/actions';*/

import Layout from '../components/Layout';
import ProfessionalCard from '../components/ProfessionalCard';


const Results = styled.View`
  margin-top: 20px;
  border-top: 1px solid #d2d2d2;
  padding: 15px 0;
`;

const Schedules = ({
  schedules
}) => {
  return (
    <Layout title="LISTAGEM DE AGENDAMENTOS">
      <Results>
        {schedules &&
          schedules.map(({ profissional_id, nome, CRM }) => (
            <ProfessionalCard
              id={profissional_id}
              name={nome}
              crm={CRM}
              spotlight={true}
              scheduled
            />
          ))}
      </Results>
    </Layout>
  );
};

const mapStateToProps = state => ({
  schedules: state.schedules
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Schedules);
