import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../../../components/Header';

class Symptoms extends Component {
  state = {};
  render() {
    return (
      <View style={{flex: 1}}>
        <Header title={'Symptoms'} />
        <ScrollView>
          <Text>Symptoms</Text>
        </ScrollView>
      </View>
    );
  }
}

export default Symptoms;
