import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { priceDisplay } from '../util';


function DealItem(props) {
  const handlePress=()=>{
    console.log("props.key")
    props.onPress(props.deal.key);
  }
  return (
    
    <TouchableOpacity style={styles.deal} onPress={handlePress}>
      <Image source={{uri:props.deal.media[0]}} style={styles.image}/>
      <View style={styles.info}>
          <Text style={styles.title}>{props.deal.title}</Text>
          <View style={styles.footer}>
            <Text style={props.cause}>{props.deal.cause.name}</Text>
            <Text style={styles.price}>{priceDisplay(props.deal.price)}</Text>
          </View>
      </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({  
  deal:{
    marginHorizontal:12,
    marginTop:12,
  },
  image:{
    width:'100%',
    height:150
  },
  info:{
    padding:10,
    backgroundColor:'#fff',
    borderColor:'#bbb',
    borderWidth:1,
    borderTopWidth:0,
  },
  title:{
    fontSize:16,
    fontWeight:'bold',
    marginBottom:5,
  },
  footer:{
    flexDirection:'row'
  },
  cause:{
    flex:2,
  },
  price:{
    flex:1,
    textAlign:'right'
  }


})

export default DealItem