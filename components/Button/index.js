import * as React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  background-color: #d91cda;
  height: 30px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
`;

const Text = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  
`;

export default ({ children, style, onPress }) => {
  return (
    <Button style={style} onPress={onPress}>
      <Text>{children}</Text>
    </Button>
  );
};
