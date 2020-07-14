import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../../../components/Header';

class Community extends Component {
  state = {};
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F8F6FE'}}>
        <Header title={'Community'} />
        <ScrollView style={{flex: 1}}>
          <View style={{flex: 1}}>
            <Text>Community</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Community;
