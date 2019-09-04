import * as React from 'react';
import styled from 'styled-components/native';

import Button from '../Button';

const ProfessionalCard = styled.View`
  box-shadow: 0 0 5px rgba(0,0,0,.3);
  border-radius: 5px;
  padding: 10px;
  background: #1bb4e3;
`;

ProfessionalCard.Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

ProfessionalCard.Spotlight = styled.Text`
  font-size: 10px;
  background: #d91cda;
  height: 15px;
  color: #fff;
  padding: 0 10px;
  border-radius: 25px;
`;

ProfessionalCard.Name = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #fff;
`;

ProfessionalCard.Crm = styled.Text`
  color: #fff;
`;

ProfessionalCard.Image = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fff;
`;

export default ({ id, name, crm, spotlight = false, onSchedule, style }) => {
  return (
    <ProfessionalCard style={style}>
      <ProfessionalCard.Image />
      <ProfessionalCard.Header>
        <ProfessionalCard.Name>{name}</ProfessionalCard.Name>
        {spotlight && (
          <ProfessionalCard.Spotlight>Em destaque</ProfessionalCard.Spotlight>
        )}
      </ProfessionalCard.Header>

      <ProfessionalCard.Crm>CRM: {crm}</ProfessionalCard.Crm>
      <Button style={{marginTop: 20}} onPress={() => onSchedule(id)}>Agendar</Button>
    </ProfessionalCard>
  );
};
