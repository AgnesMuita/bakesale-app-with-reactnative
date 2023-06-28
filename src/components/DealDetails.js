import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { priceDisplay } from '../util';

function DealDetail(props) {
  //class based version
  // static propstype={
  //   initialDealData:PropTypes.object.isRequired
  // }
  // state={
  //   deal:this.props.initialDealData,
  // }
  //this means reading from the state rather than props hence new info is rerendered through the state on top of the initial info
  return (
    <View style={styles.deal}>
      <Image source={{uri:props.initialDealData.media[0]}} style={styles.image}/>
      <View style={styles.info}>
          <Text style={styles.title}>{props.initialDealData.title}</Text>
          <View style={styles.footer}>
            <Text style={props.cause}>{props.initialDealData.cause.name}</Text>
            <Text style={styles.price}>{priceDisplay(props.initialDealData.price)}</Text>
          </View>
      </View>

    </View>
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

export default DealDetail;