import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export type Division = 'A' | 'B-A' | 'B-B';

interface DivisionSelectorProps {
  selectedDivision: Division;
  onSelectDivision: (division: Division) => void;
}

const DivisionSelector: React.FC<DivisionSelectorProps> = ({
  selectedDivision,
  onSelectDivision,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedDivision}
          onValueChange={(itemValue) => onSelectDivision(itemValue as Division)}
          style={styles.picker}
          dropdownIconColor="#000"
        >
          <Picker.Item label="A Division" value="A" />
          <Picker.Item label="B Division-A" value="B-A" />
          <Picker.Item label="B Division-B" value="B-B" />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f7fbf2',
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#35693F',
    borderRadius: 6,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    color: '#fff',
  },
});

export default DivisionSelector;
