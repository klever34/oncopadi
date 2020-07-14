import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../../../components/Header';

class Settings extends Component {
  state = {};
  render() {
    return (
      <View style={{flex: 1}}>
        <Header title={'Settings'} />
        <ScrollView>
          <Text>Settings</Text>
        </ScrollView>
      </View>
    );
  }
}

export default Settings;
