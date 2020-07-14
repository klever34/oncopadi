import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../constants/index';
import {connect} from 'react-redux';
import Modal from 'react-native-modal';
import {TextInput} from 'react-native-paper';

const Header = (props) => {
  const [showModal, setModal] = React.useState(false);
  useEffect(() => {}, []);
  return (
    <View style={styles.headerContainer}>
      <Ionicons
        name={'ios-time-sharp'}
        color={colors.bgColor}
        style={{fontSize: 20, paddingHorizontal: 5}}
      />
      <Text style={styles.headerTitle}>{props.title}</Text>
      <Ionicons
        name={'md-notifications'}
        color={colors.bgColor}
        style={{fontSize: 20, paddingHorizontal: 5}}
      />
      {/* <Modal
        isVisible={showModal}
        keyboardTopOffset={0}
        onBackdropPress={() => setModal(false)}
        onBackButtonPress={() => setModal(false)}
        style={{
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 50,
        }}>
        <View style={{flex: 1}}>
          <Text>I am the modal content!</Text>
          <TextInput placeholder={'enter'} style={{height: 200}} />
        </View>
      </Modal> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: Platform.OS === 'ios' ? 80 : 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    backgroundColor: colors.headerBg,
    paddingTop: Platform.OS === 'ios' ? 35 : 10,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: colors.textColor,
  },
  rightGroup: {
    flexDirection: 'row',
    paddingTop: 15,
  },
  tourMode: {
    borderWidth: 3,
    // padding: Platform.OS === 'ios' ? 0 : 10,
    borderRadius: 50,
    borderColor: 'transparent',
    elevation: 5,
    backgroundColor: colors.bgColor,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 9,
    shadowRadius: 2,
    // marginVertical: 10,
  },
});

export default Header;

// const mapStateToProps = (state) => {
//   return {
//     modalVal: state.logOutReducer.logOutModal,
//     tourModalValue: state.tourReducer.tourModal,
//     counter: state.tourReducer.tourCounter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     popModal: (val) => dispatch(showLogoutModal(val)),
//     popTourModal: (val) => dispatch(showTourModal(val)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Header);
