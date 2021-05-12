import React, {useState} from 'react';
import {View} from 'react-native';
import {database} from './config';
import {styles} from './style';
import TextField from './components/TextField/index';
import Button from './components/Button/index';

export default function DB() {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [data, setData] = useState([]);

  const addUser = () => {
    const temp = database().ref('users');
    // temp.set({
    //   id: 101,
    //   name: 'maya',
    // });
    if (temp.push({id, name})) {
      alert('Added Successfully');
    }
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
    database()
      .ref('users/' + id)
      .remove()
      .then(() => {
        setData(!data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const updateUser = () => {
    database()
      .ref('/users')
      .update({
        id: 1,
        name: 'chhaya',
      })
      .then(() => console.log('Data updated.'));
  };
  return (
    <>
      <View
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: 'pink',
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
