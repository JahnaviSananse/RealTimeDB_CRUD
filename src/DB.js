import React, {useState} from 'react';
import {View} from 'react-native';
import {database} from './config';
import {styles} from './style';
import TextField from './components/TextField/index';
import Button from './components/Button/index';
import firebase from '@react-native-firebase/app';

export default function DB() {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [data, setData] = useState([]);

  const addUser = () => {
    database()
      .ref('users')
      // .set({
      //   id: 101,
      //   name: 'maya',
      // });
      .push({id, name});

    // .ref('users/-M_Vh2G_A9XbV3-UsqSp')
    // .set({id: 102, name: 'jahnavi'});
  };
  const deleteAllUsers = () => {
    database()
      .ref('users')
      .remove()
      .then(() => {
        setData([]);
      });
  };
  const deleteUser = () => {
    // database()
    //   .ref('users/' + id)
    //   .remove()
    //   .then(() => {
    //     setData({name, id});
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    var ref = firebase.database().ref().child('users');
    var refUserId = ref.orderByChild('id').equalTo(id);
    refUserId
      .once('value')
      .then(function (snapshot) {
        if (snapshot.hasChildren()) {
          return snapshot.forEach(function (child) {
            child.ref.remove({id: id, name: name});
          });
        }
      })
      .then(function () {
        console.log('delete done');
      })
      .catch(function (error) {
        console.log(error);
      });
    refUserId.once('value', function (snapshot) {
      if (snapshot.hasChildren()) {
        snapshot.forEach(function (child) {
          child.ref.remove();
        });
      }
    });
  };

  const updateUser = () => {
    var ref = firebase.database().ref().child('users');
    var refUserId = ref.orderByChild('id').equalTo(id);
    refUserId
      .once('value')
      .then(function (snapshot) {
        if (snapshot.hasChildren()) {
          return snapshot.forEach(function (child) {
            child.ref.update({id: id, name: name});
          });
        } else {
          return snapshot.ref.push({
            player: 'any',
            id: 'any',
          });
        }
      })
      .then(function () {
        console.log('update/push done');
      })
      .catch(function (error) {
        console.log(error);
      });
    refUserId.once('value', function (snapshot) {
      if (snapshot.hasChildren()) {
        snapshot.forEach(function (child) {
          child.ref.update(name);
        });
      }
    });
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          width: '100%',
          paddingVertical: 30,
        }}>
        <TextField
          title="Enter Your ID : "
          value={id}
          change={text => setId(text)}
          style={styles.input}
          placeholder="enter your id here..."
        />
        <TextField
          title="Enter Your Name : "
          value={name}
          change={text => setName(text)}
          style={styles.input}
          placeholder="enter your name here..."
        />

        <Button
          title="ADD TO DATABASE"
          onPress={() => addUser()}
          //   onPress={() => {
          //     // setData({...data, id, name});
          //     // setData(...data, {id, name});
          //     setData(oldArray => [...oldArray, {name, id}]);
          //   }}
        />
        <Button title="DELETE ALL DATA" onPress={() => deleteAllUsers()} />
        <Button title="DELETE DATA" onPress={() => deleteUser()} />
        <Button title="UPDATE DATA" onPress={() => updateUser()} />
      </View>
      {/* <View style={{flex: 0.6, width: '100%', backgroundColor: 'yellow'}}>
        <Text>
          {data[0]?.id} {data[0]?.name}
        </Text>
      </View> */}
    </>
  );
}
