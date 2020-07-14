import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
const Tabs = createBottomTabNavigator();
import {connect} from 'react-redux';
import {SvgXml} from 'react-native-svg';

import {
  colors,
  settings_gray,
  settings_purple,
  consult_gray,
  consult_purple,
  community_gray,
  community_purple,
  records_gray,
  records_purple,
  symptoms_gray,
  symptoms_purple,
} from '../constants/index';

import Symptoms from '../screens/tabs/symptoms/Symptoms';
import Community from '../screens/tabs/community/Community';
import Consultation from '../screens/tabs/consultation/Consultation';
import MedicalRecords from '../screens/tabs/medical-records/MedicalRecords';
import Settings from '../screens/tabs/settings/Settings';

const SymptomsStack = createStackNavigator();
const SymptomsStackScreen = () => {
  return (
    <SymptomsStack.Navigator headerMode="none">
      <SymptomsStack.Screen name="Symptoms" component={Symptoms} />
      {/* <SymptomsStack.Screen name="Notifications" component={Notifications} /> */}
    </SymptomsStack.Navigator>
  );
};

const CommunityStack = createStackNavigator();
const CommunityStackScreen = () => {
  return (
    <CommunityStack.Navigator headerMode="none">
      <CommunityStack.Screen name="Community" component={Community} />
    </CommunityStack.Navigator>
  );
};

const ConsultationStack = createStackNavigator();
const ConsultationStackScreen = () => {
  return (
    <ConsultationStack.Navigator headerMode="none">
      <ConsultationStack.Screen name="Consultation" component={Consultation} />
    </ConsultationStack.Navigator>
  );
};

const MedicalRecordsStack = createStackNavigator();
const MedicalRecordsStackScreen = () => {
  return (
    <MedicalRecordsStack.Navigator headerMode="none">
      <MedicalRecordsStack.Screen
        name="MedicalRecords"
        component={MedicalRecords}
      />
    </MedicalRecordsStack.Navigator>
  );
};

const SettingsStack = createStackNavigator();
const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator headerMode="none">
      <SettingsStack.Screen name="Settings" component={Settings} />
    </SettingsStack.Navigator>
  );
};

const TabsScreen = (props) => (
  <Tabs.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Community') {
          return (iconName = focused ? (
            <View>
              <SvgXml width="30" height="30" xml={community_purple} />
            </View>
          ) : (
            <SvgXml width="30" height="30" xml={community_gray} />
          ));
        } else if (route.name === 'Consultation') {
          return (iconName = focused ? (
            <SvgXml width="30" height="30" xml={consult_purple} />
          ) : (
            <View>
              <SvgXml width="30" height="30" xml={consult_gray} />
            </View>
          ));
        } else if (route.name === 'Symptoms') {
          return (iconName = focused ? (
            <SvgXml width="30" height="30" xml={symptoms_purple} />
          ) : (
            <View>
              <SvgXml width="30" height="30" xml={symptoms_gray} />
            </View>
          ));
        } else if (route.name === 'Records') {
          return (iconName = focused ? (
            <SvgXml width="30" height="30" xml={records_purple} />
          ) : (
            <View>
              <SvgXml width="30" height="30" xml={records_gray} />
            </View>
          ));
        } else if (route.name === 'Settings') {
          return (iconName = focused ? (
            <SvgXml width="30" height="30" xml={settings_purple} />
          ) : (
            <View>
              <SvgXml width="30" height="30" xml={settings_gray} />
            </View>
          ));
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.primary,
      inactiveTintColor: '#4F4F4F',
      labelStyle: {
        fontSize: 9,
        fontFamily: 'Poppins-Medium',
      },
      style: {
        height: Platform.OS === 'ios' ? 90 : 70,
        backgroundColor: colors.bgColor,
      },
    }}>
    <Tabs.Screen name="Community" component={CommunityStackScreen} />
    <Tabs.Screen name="Consultation" component={ConsultationStackScreen} />
    <Tabs.Screen name="Symptoms" component={SymptomsStackScreen} />
    <Tabs.Screen name="Records" component={MedicalRecordsStackScreen} />
    <Tabs.Screen name="Settings" component={SettingsStackScreen} />
  </Tabs.Navigator>
);
const styles = StyleSheet.create({
  tourMode: {
    borderWidth: 3,
    padding: 30,
    borderRadius: 50,
    borderColor: 'transparent',
    elevation: 5,
    backgroundColor: colors.bgColor,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 9,
    shadowRadius: 2,
    marginVertical: 10,
  },
});

export default TabsScreen;

// const mapStateToProps = (state) => {
//   return {
//     counter: state.tourReducer.tourCounter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setCount: (val) => dispatch(tourCount(val)),
//     setVideoStat: (val) => dispatch(loadVideos(val)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(TabsScreen);
