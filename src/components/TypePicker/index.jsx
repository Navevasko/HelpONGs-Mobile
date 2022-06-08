import { View, Text } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./style";
import { theme } from "../../global/styles/theme";

export default function TypePicker({
  placeholder,
  mode,
  onValueChange,
  selectedValue,
  items,
  width,
  height,
  fontSize,
  border,
}) {
  return (
    <View
      style={[
        styles.pickerContainer,
        border ? styles.border : "",
        { width: width, height: height },
      ]}
    >
      <Picker
        style={styles.picker}
        mode={mode}
        onValueChange={onValueChange}
        selectedValue={selectedValue}
      >
        {placeholder && (
          <Picker.Item
            label={placeholder}
            value={""}
            key={Math.random()}
            style={{ fontSize: fontSize, color: theme.colors.placeholder }}
          />
        )}

        {items &&
          items.map((item) => {
            return (
              <Picker.Item
                label={item.label}
                value={item.value}
                key={item.value}
                style={{ fontSize: fontSize }}
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
  selectedValue: PropTypes.any,
  items: PropTypes.array.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.number,
};

TypePicker.defaultProps = {
  mode: "dropdown",
  width: "50%",
  height: 35,
  fontSize: 17,
};