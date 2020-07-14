import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../../../components/Header';

class Consultation extends Component {
  state = {};
  render() {
    return (
      <View style={{flex: 1}}>
        <Header title={'Consultation'} />
        <ScrollView>
          <Text>Consultation</Text>
        </ScrollView>
      </View>
    );
  }
}

export default Consultation;
