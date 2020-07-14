import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../../../components/Header';

class MedicalRecords extends Component {
  state = {};
  render() {
    return (
      <View style={{flex: 1}}>
        <Header title={'Medical Records'} />
        <ScrollView>
          <Text>Medical Records</Text>
        </ScrollView>
      </View>
    );
  }
}

export default MedicalRecords;
