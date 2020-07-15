import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Platform,
} from 'react-native';
import Header from '../../../components/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors, consult_gray, consult_purple} from '../../../constants/index';
import {SvgXml} from 'react-native-svg';
import Modal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';

class Consultation extends Component {
  state = {
    showModal: false,
    showIndicator: false,
    todaysDate: new Date(),
    showDate: false,
  };

  async onDataChange(event, selectedDate) {
    try {
      let splitValues = JSON.stringify(selectedDate).split('T');
      console.log(splitValues);
    } catch (error) {}
  }
  render() {
    const {showModal, showIndicator, showDate, todaysDate} = this.state;
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
    const iconSelected = (icon) => {
      this.props.navigation.push(icon);
    };
    return (
      <View style={{flex: 1, backgroundColor: '#F8F6FE'}}>
        <Header title={'Consultation'} selectedIcon={iconSelected} />
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => this.setState({showModal: true})}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 20,
            }}>
            <MaterialIcons
              name={'add-circle'}
              color={colors.primary}
              style={{fontSize: 24, paddingRight: 15}}
            />
            <Text style={styles.addText}>Request Consultation</Text>
          </TouchableOpacity>
          {data.length <= 0 && (
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <View style={{marginVertical: 20}}>
                <SvgXml width="30" height="40" xml={consult_gray} />
              </View>
              <Text style={styles.emptyRecords}>
                You haven’t recorded any symptoms.
              </Text>
            </View>
          )}
          {data.length > 0 && (
            <Text style={[styles.bigText, {paddingLeft: 20, color: '#000'}]}>
              Recent Symptoms
            </Text>
          )}
          {data.length > 0 && (
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
                  <SvgXml width="30" height="30" xml={consult_purple} />
                  <View style={{padding: 5, flex: 1, marginLeft: 5}}>
                    <Text style={[styles.bigText, {color: '#000'}]}>
                      Scheduled Consultation
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
          )}
        </View>
        <Modal
          isVisible={showModal}
          keyboardTopOffset={0}
          onBackdropPress={() => this.setState({showModal: false})}
          onBackButtonPress={() => this.setState({showModal: false})}
          style={{
            backgroundColor: '#fff',
            // alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 50,
          }}>
          <View style={{flex: 1, padding: 20}}>
            <View style={{alignItems: 'flex-end'}}>
              <AntDesign
                name={'close'}
                color={colors.primary}
                style={{fontSize: 36, paddingRight: 15}}
                onPress={() => this.setState({showModal: false})}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <Text
                style={[
                  styles.addText,
                  {fontFamily: 'Poppins-Bold', paddingHorizontal: 10},
                ]}>
                Request Consultation
              </Text>
            </View>
            <Text style={styles.smallText}>Purpose</Text>
            <View style={styles.txtInput}>
              <TextInput
                placeholder={'Why do you want to be consulted?'}
                style={{
                  height: Platform.OS === 'ios' ? 250 : 150,
                  fontFamily: 'Poppins-Regular',
                }}
                multiline={true}
              />
            </View>
            <Text style={styles.smallText}>Date</Text>
            <TouchableOpacity
              onPress={() => this.setState({showDate: true})}
              style={[
                styles.txtInput,
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                },
              ]}>
              <Text style={styles.smallText}>
                When do you want to schedule it?
              </Text>
              <AntDesign
                name={'down'}
                color={colors.primary}
                style={{fontSize: 14, paddingRight: 15}}
              />
            </TouchableOpacity>
            {showDate && (
              <DateTimePicker
                testID={'datePicker'}
                value={todaysDate}
                mode={'date'}
                is24Hour={true}
                display="default"
                onChange={this.onDataChange}
              />
            )}
            <View style={styles.btmContainer}>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => authUser()}>
                <Text style={styles.smallLogin}>Request</Text>
                {showIndicator && (
                  <ActivityIndicator
                    size="small"
                    color="#ffffff"
                    style={{paddingHorizontal: 5, marginTop: -3}}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addText: {
    fontFamily: 'Poppins-Regular',
    color: colors.secondary,
    fontSize: 16,
  },
  emptyRecords: {
    color: '#A5A3A7',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    paddingHorizontal: 40,
    textAlign: 'center',
  },
  smallText: {
    fontFamily: 'Poppins-Regular',
    color: colors.txtInputBorderBtm,
    marginTop: 30,
    fontSize: 12,
  },
  txtInput: {
    fontFamily: 'Poppins-Regular',
    borderWidth: 1,
    borderColor: colors.secondary,
    marginVertical: 10,
    backgroundColor: '#fefefe',
    borderRadius: 5,
    padding: 10,
  },
  btmContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonContainer: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 13,
    width: '100%',
    marginVertical: 20,
    flexDirection: 'row',
    borderRadius: 6,
  },
  smallLogin: {
    color: colors.textColor,
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
  },
  card: {
    elevation: 1,
    backgroundColor: colors.bgColor,
    shadowColor: colors.bgColor,
    shadowOffset: {width: 0, height: 1.5},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    margin: 5,
    marginHorizontal: 20,
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

export default Consultation;
