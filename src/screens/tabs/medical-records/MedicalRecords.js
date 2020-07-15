import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Header from '../../../components/Header';
import {colors} from '../../../constants/index';

class MedicalRecords extends Component {
  state = {};
  render() {
    const iconSelected = (icon) => {
      this.props.navigation.push(icon);
    };
    return (
      <View style={{flex: 1, backgroundColor: '#F8F6FE'}}>
        <Header title={'Records'} selectedIcon={iconSelected} />
        <ScrollView>
          <View style={styles.card}>
            <Text style={styles.header}>Name</Text>
            <Text style={styles.subHeader}>Chiamaka Duruimo</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
              <View>
                <Text style={styles.header}>Patient ID</Text>
                <Text style={styles.subHeader}>100090900</Text>
              </View>
              <View>
                <Text style={styles.header}>Gender</Text>
                <Text style={styles.subHeader}>Female</Text>
              </View>
              <View>
                <Text style={styles.header}>Birth Date</Text>
                <Text style={styles.subHeader}>8 June 1991</Text>
              </View>
            </View>
            <Text style={styles.header}>Address</Text>
            <Text style={styles.subHeader}>
              20 University Road, Akoka, Yaba, Lagos State, Nigeria
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <View>
                <Text style={styles.header}>Phone</Text>
                <Text style={styles.subHeader}>08135674950</Text>
              </View>
              <View style={{paddingLeft: 40}}>
                <Text style={styles.header}>Marital Status</Text>
                <Text style={styles.subHeader}>Single</Text>
              </View>
            </View>
            <Text style={styles.header}>Email</Text>
            <Text style={styles.subHeader}>Chiamakaduruimo@gmail.com</Text>
            <Text style={[styles.header, {marginVertical: 10}]}>History</Text>
            <Text style={styles.subHeader}>Loremipsum dolor sit ame</Text>
            <Text style={[styles.header, {marginVertical: 10}]}>
              Medication
            </Text>
            <Text style={styles.subHeader}>Loremipsum dolor sit ame</Text>
          </View>
        </ScrollView>
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
    margin: 5,
    marginHorizontal: 10,
    padding: 10,
    borderColor: colors.textColor,
    borderWidth: 0.3,
    borderRadius: 5,
    marginTop: 20,
  },
  header: {
    fontFamily: 'Poppins-Bold',
    fontSize: 13,
    lineHeight: 19,
    color: '#323C47',
  },
  subHeader: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    lineHeight: 27,
    color: '#323C47',
  },
});

export default MedicalRecords;
