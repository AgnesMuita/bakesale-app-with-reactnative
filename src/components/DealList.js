import React from 'react'
import { StyleSheet, Text, View, FlatList, Item } from 'react-native';
import DealItem from './DealItem';

function DealList(props) {
  
  return (
    <View style={styles.list}>
    <FlatList
        data={props.deals}
        renderItem={({item}) => 
        <DealItem deal={item} 
          onPress={props.onItemPress}
        />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list:{
    backgroundColor:"#eee",
    flex:1,
    width:'100%',
    paddingTop:50,
  }

})

export default DealList