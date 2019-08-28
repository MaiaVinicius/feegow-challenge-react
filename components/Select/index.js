import * as React from 'react';
import { Platform, ActionSheetIOS, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Select = styled.Picker`
  border: 1px solid #d2d2d2;
  height: 40px;
  border-radius: 25px;
  font-weight: bold;
  padding: 0 15px;
`;

const SelectIOS = styled.TouchableOpacity`
  border: 1px solid #d2d2d2;
  height: 40px;
  border-radius: 25px;
  font-weight: bold;
  padding: 0 15px;
  justify-content: center;
  align-items: center;
`;

SelectIOS.Text = styled.Text`

`;

const isPlatform = platform => Platform.OS === platform;

export default ({ list, active, style, onChange }) => {
  const handlePress = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: list.map(item => item.label),
      },
      buttonIndex => {
        const indexValue = list[buttonIndex].value;
        onChange(indexValue);
      }
    );
  };
  return (
    <View style={style}>
      {(isPlatform('ios') && (
        <SelectIOS onPress={handlePress}>
          <SelectIOS.Text>
            {(list.find(item => item.value == active) || list[0]).label}
          </SelectIOS.Text>
        </SelectIOS>
      )) || (
        <Select style={style}>
          {list && list.map(item => <Select.Item {...item} />)}
        </Select>
      )}
    </View>
  );
};
