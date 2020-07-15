import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Header from '../../../components/Header';
import {colors} from '../../../constants/index';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import {AuthContext} from '../../../../context';

class Settings extends Component {
  state = {
    tabIndex: 0,
    showModal: false,
  };

  async showAccount() {
    this.setState({tabIndex: 0});
  }

  async showPaymentInfo() {
    this.setState({tabIndex: 1});
  }

  async logOut() {
    this.setState({showModal: true});
  }
  render() {
    const iconSelected = (icon) => {
      this.props.navigation.push(icon);
    };
    const {tabIndex, showModal} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: '#F8F6FE'}}>
        <Header title={'Settings'} selectedIcon={iconSelected} />
        <ScrollView>
          <View style={styles.card}>
            <View style={styles.tabs}>
              <TouchableOpacity
                onPress={() => this.showAccount()}
                style={{flex: 1}}>
                <Text
                  style={
                    tabIndex === 0 ? styles.tabTextActive : styles.tabText
                  }>
                  Account
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.showPaymentInfo()}
                style={{flex: 1}}>
                <Text
                  style={
                    tabIndex === 1 ? styles.tabTextActive : styles.tabText
                  }>
                  Payment Info
                </Text>
              </TouchableOpacity>
            </View>
            {tabIndex === 0 && (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={[
                      styles.header,
                      {fontSize: 16, paddingVertical: 15},
                    ]}>
                    Account Information
                  </Text>
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
                      style={{fontSize: 24, paddingRight: 5}}
                    />
                    <Text style={styles.addText}>Edit</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.header}>Name</Text>
                <Text style={styles.subHeader}>Chiamaka Duruimo</Text>
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
                <Text style={[styles.header, {marginVertical: 10}]}>
                  Password
                </Text>
                <TextInput placeholder="**********" />
                <Text
                  onPress={() => this.logOut()}
                  style={[
                    styles.header,
                    {marginVertical: 30, color: colors.primary},
                  ]}>
                  Logout
                </Text>
              </View>
            )}

            {tabIndex === 1 && (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={[
                      styles.header,
                      {fontSize: 16, paddingVertical: 15},
                    ]}>
                    Cards
                  </Text>
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
                      style={{fontSize: 24, paddingRight: 5}}
                    />
                    <Text style={[styles.addText, {paddingRight: 20}]}>
                      Add Card
                    </Text>
                  </TouchableOpacity>
                </View>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#450BB5', '#4DA1FF']}
                  locations={[0.12, 0.98]}
                  style={styles.linearGradient}>
                  <View>
                    <Text
                      style={{
                        fontSize: 11,
                        fontFamily: 'Poppins-Medium',
                        paddingVertical: 30,
                        color: colors.textColor,
                      }}>
                      Chiamaka Duruimo
                    </Text>
                    <Text
                      style={{
                        fontSize: 24,
                        fontFamily: 'Poppins-Medium',
                        paddingVertical: 10,
                        color: colors.textColor,
                      }}>
                      xxxx xxxx xxxx 1234
                    </Text>
                  </View>
                </LinearGradient>
              </View>
            )}
          </View>
          <Modal
            isVisible={showModal}
            keyboardTopOffset={0}
            onBackdropPress={() => this.setState({showModal: false})}
            onBackButtonPress={() => this.setState({showModal: false})}
            style={{
              backgroundColor: 'transparent',
              height: 80,
              justifyContent: 'center',
              marginVertical: 50,
            }}>
            <View style={[styles.centeredView, {flex: 1, padding: 20}]}>
              <View style={styles.modalView}>
                <View style={{left: 100}}>
                  <AntDesign
                    name={'close'}
                    color={colors.primary}
                    style={{fontSize: 36, paddingRight: 15}}
                    onPress={() => this.setState({showModal: false})}
                  />
                </View>
                <View style={{alignItems: 'center', marginVertical: 50}}>
                  <Text
                    style={[
                      styles.addText,
                      {
                        fontFamily: 'Poppins-Bold',
                        color: '#000000',
                        paddingHorizontal: 30,
                        textAlign: 'center',
                      },
                    ]}>
                    Are you sure you want to log out?
                  </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    style={styles.yesBtn}
                    onPress={() => this.props.signOut()}>
                    <Text
                      style={{
                        color: colors.textColor,
                        fontFamily: 'Poppins-Bold',
                        fontSize: 13,
                      }}>
                      Yes
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.noBtn}
                    onPress={() => this.setState({showModal :false})}>
                    <Text
                      style={{
                        color: '#B6272B',
                        fontFamily: 'Poppins-Bold',
                        fontSize: 13,
                      }}>
                      No
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    padding: 20,
    borderRadius: 5,
  },
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
  tabs: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabText: {
    color: '#000000',
    fontFamily: 'Poppins-Regular',
  },
  tabTextActive: {
    color: colors.primary,
    fontFamily: 'Poppins-Bold',
    // borderBottomColor: colors.primary,
    // borderBottomWidth: 2,
    textDecorationColor: colors.primary,
    textDecorationLine: 'underline',
  },
  addText: {
    fontFamily: 'Poppins-Regular',
    color: colors.secondary,
    fontSize: 16,
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
  yesBtn: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginHorizontal: 20,
    width: '40%',
    borderRadius: 5,
  },
  noBtn: {
    backgroundColor: '#FDECED',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginHorizontal: 20,
    width: '40%',
    borderRadius: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    marginHorizontal: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%',
  },
});

// export default Settings;
export default function(props) {

const {signOut} = React.useContext(AuthContext);

  return <Settings {...props} signOut={signOut}></Settings>
};