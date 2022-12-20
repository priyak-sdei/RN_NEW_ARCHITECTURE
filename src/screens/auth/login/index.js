import {
  Button,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as AppActions from '@actions';
import Analytics from 'appcenter-analytics';
import {
  insertDataToDB,
  insertDataToDB1,
  getUserFromDB,
  getUserFromDB1,
  insertOrUpdate,
  deleteByPatientId,
  deleteUserTable,
  joinTables,
} from '../../../helpers/dbUtils';

function Login(props) {
  let [userCount, setUserCount] = useState(0);
  const dispatch = useDispatch();
  const authReducer = useSelector(state => state.authReducer);

  /**Adding event On Mount */
  useEffect(() => {
    dispatch(AppActions.saveEvent([{ name: 121211 }]));
    Analytics.startSession();

    // dispatch(AppActions.addLoginUserData({ name: 'Priya', action: "Demo react" }))
    // dispatch(AppActions.addition())
  }, []);

  useEffect(() => {
    // setTimeout(() => {
    //   dispatch(AppActions.login(Math.random()));
    // }, 4000);
  }, []);

  /*****dding listener  everytime props.x changes ***/
  useEffect(() => {
    // setUserCount('change' + Math.random());
    // console.log(props, 'props...', authReducer);
    // return () => {
    //   // removing the listener when props.x changes
    // };
  }, [authReducer.value]);

  const registerPage = () => {
    let user_name = 'ABC';
    let user_contact = '6788989';
    let user_address = 'Mohali';
    let user_lastName = '123';

    /******Insert data from DB *****/
    insertDataToDB(user_name, user_contact, user_address, res => {
      console.log(res, 'res.......');
      if (res) {
        /***** Get data from DB ******/
        getUserFromDB(res => {
          console.log('res', res);
          if (res.rowsAffected >= 0) {
            Alert.alert(
              'Success',
              'You are Registered Successfully',
              [
                {
                  text: 'Ok',
                  onPress: () =>
                    props.navigation.navigate('Drawer', {
                      itemId: 86,
                      otherParam: 'anything you want here',
                    }),
                },
              ],
              { cancelable: false },
            );
          } else {
            alert('Failed');
          }
        });
      }
    });

    /****** Insert Another table for JOIN *****/
    insertDataToDB1(user_name, user_lastName, res => {
      console.log(res, 'Another table res.......');
      /***** Get data from  another DB ******/
      getUserFromDB1(res => {
        console.log(' get another table res', res);
      });
    });
  };

  /****** Update User Data *******/
  const updateUser = () => {
    let user_name = 'XYZ';
    let user_contact = '9898745667';
    let user_address = 'Chandigarh';
    let id = 1;

    insertOrUpdate(id, user_name, user_contact, user_address, res => {
      console.log('Insert data', res);
      if (res.rowsAffected > 0) {
        Alert.alert(
          'Success',
          'User updated successfully',
          [
            {
              text: 'Ok',
              onPress: () =>
                props.navigation.navigate('Drawer', {
                  itemId: 86,
                  otherParam: 'anything you want here',
                }),
            },
          ],
          { cancelable: false },
        );
      } else alert('Updation Failed');
    });
  };

  const deleteData = () => {
    let id = 1;
    deleteByPatientId(id, res => {
      console.log('DELETE data', res);
    });
  };

  const deleteTableData = () => {
    deleteUserTable(res => {
      console.log('delete table data', res);
      if (res.rowsAffected > 0) {
        Alert.alert(
          'Success',
          'Delete Table Successfully',
          [
            {
              text: 'Ok',
              onPress: () =>
                props.navigation.navigate('Drawer', {
                  itemId: 86,
                  otherParam: 'anything you want here',
                }),
            },
          ],
          { cancelable: false },
        );
      } else {
        alert('failed');
      }
    });
  };

  const joinTable = () => {
    joinTables(res => {
      console.log('JOIN TABLE--=====', res.rows.raw());
    });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontFamily: 'Nunito-Light' }}>
        Logins screen {authReducer.value} {userCount}
      </Text>
      <Text style={{ fontFamily: 'Nunito-Medium' }}>
        Logins screen {authReducer.value} {userCount}
      </Text>
      <Text style={{ fontFamily: 'Nunito-Regular' }}>
        Logins screen {authReducer.value} {userCount}
      </Text>
      <Text style={{ fontFamily: 'Nunito-Bold' }}>
        Logins screen {authReducer.value} {userCount}
      </Text>
      <Icon name="rocket" size={30} color="#900" />
      <Button title="Go to Register Page" onPress={() => registerPage()} />

      <Button
        title="Go to Tab Page"
        onPress={() => {
          props.navigation.navigate('MyTabs');
        }}
      />
      <Button title="Update user Data" onPress={() => updateUser()} />

      <Button title="Delete data By user Id" onPress={() => deleteData()} />
      <Button
        title="Delete data of user table"
        onPress={() => deleteTableData()}
      />
      <Button title="Join Table" onPress={() => joinTable()} />
    </View>
  );
}
export default Login;
