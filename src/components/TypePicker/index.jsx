import { View, Text } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { Picker } from "@react-native-picker/picker";
import { styles } from './style';
import { theme } from '../../global/styles/theme';

export default function TypePicker({mode, onValueChange, selectedValue, items}) {
  return (

      <View
        style={{
          width: "90%",
          borderWidth: 2,
          borderColor: theme.colors.grey,
          borderRadius: 5,
          alignSelf: "center",
          marginBottom: 30,
        }}
      >
        <Picker
          style={{ height: 50, width: "100%" }}
          mode={mode}
          onValueChange={onValueChange}
          selectedValue={selectedValue}
        >
          {items.map((item) => {
            return (
              <Picker.Item
                label={item.label}
                value={item.value}
                key={item.value}
              />
            );
          })}
        </Picker>
      </View>
  );
}

TypePicker.propTypes = {
  mode: PropTypes.string,
  onValueChange: PropTypes.func,
  selectedValue: PropTypes.string,
  items: PropTypes.array.isRequired
};

TypePicker.defaultProps = {
  mode: 'dropdown'
}