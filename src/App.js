import React, { Component } from 'react';
import { StyleSheet,
   Text,
    View,
     FlatList,
      Image,
       TouchableOpacity,
        Dimensions } from 'react-native';
import firebase from 'firebase';
const {width,height} = Dimensions.get('window');


export default class App extends Component {
state = {
  userList: []
}
componentWillMount() {
  firebase.database().ref().child('users').once('value', (snap) => {
    const userList = [];
    snap.forEach((user) => {
      const { first_name, id, uid } = user.val()
      userList.push({ first_name, id, uid })
    })
    this.setState({ userList })
  })
}

render() {
  return (
    <View style={styles.container}>

    <View style={{ alignItems: 'center', justifyContent: 'center', width: width - 40, paddingBottom: 10 }}>
    <Text style={{ color: 'grey', fontWeight: 'bold' }}> Chat </Text>
    </View>

    <FlatList
    data={this.state.userList}
    keyExtractor={(item,index) => item.first_name}
    renderItem={({ item }) =>

<TouchableOpacity onPress={() => console.log(item.first_name)} >
<View style={{ flex: 1, backgroundColor: 'transparent', flexDirection:'row', padding: 5, width: width }}>
    <Image
style={styles.image}
source={{ uri: `https://graph.facebook.com/${item.id}/picture?height=100` }}
    />
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ color: 'grey', fontWeight: 'bold' }}>{item.first_name}</Text>
   </View>

    </View>
    <View style={{ width: width, height: 1, backgroundColor: 'darkgrey' }} />
</TouchableOpacity>

  } />
    </View>
  );
 }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
    padding:20
	},
  image: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  text: {
    color: 'grey',
    fontWeight: 'bold'
  },
});
