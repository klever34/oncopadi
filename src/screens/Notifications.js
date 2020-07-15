import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import {colors} from '../constants/index';

class Notifications extends Component {
  state = {};

  render() {
    const data = [
      {
        id: 0,
        image: '../../../assets/images/juan.png',
      },
      {
        id: 1,
        image: '../../../assets/images/taylor.png',
      },
      {
        id: 2,
        image: '../../../assets/images/woman.png',
      },
      {
        id: 3,
        image: '../../../assets/images/woman.png',
      },
      {
        id: 4,
        image: '../../../assets/images/woman.png',
      },
      {
        id: 5,
        image: '../../../assets/images/woman.png',
      },
      {
        id: 6,
        image: '../../../assets/images/woman.png',
      },
    ];
    return (
      <View style={{flex: 1, backgroundColor: '#F8F6FE', paddingTop: 40}}>
        <Text
        onPress={() => this.props.navigation.goBack()}
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 14,
            paddingLeft: 20,
          }}>
          Back
        </Text>
        <Text
          style={{fontFamily: 'Poppins-Bold', fontSize: 24, paddingLeft: 20}}>
          Notifications
        </Text>
        <View style={{flex: 1}}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  height: 0.5,
                  backgroundColor: '#e5e5e5',
                  marginHorizontal: 8,
                }}
              />
            )}
            renderItem={(cardItem) => (
              <View style={[styles.card, styles.cardRow]}>
                <Image source={require('../assets/images/juan.png')} />
                <View style={{padding: 5, flex: 1, marginLeft: 5}}>
                  <Text style={styles.smallText}>WELLBEING</Text>
                  <Text style={styles.bigText}>10 Ways To Eat Healthy</Text>
                  <Text style={[styles.bigText, {color: '#000'}]}>
                    Inisghtful ways to change your eating habit.
                  </Text>
                  <Text
                    style={[
                      styles.smallText,
                      {color: colors.searchInputBorder},
                    ]}>
                    July 8, 2018 2:00 PM
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    elevation: 1,
    backgroundColor: colors.bgColor,
    shadowColor: colors.bgColor,
    shadowOffset: {width: 0, height: 1.5},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginHorizontal: 20,
    margin: 5,
    padding: 10,
    borderColor: colors.textColor,
    borderWidth: 0.3,
    borderRadius: 5,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000000',
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
  },
  bigText: {
    color: colors.primary,
    fontFamily: 'Poppins-Regular',
  },
});

export default Notifications;
