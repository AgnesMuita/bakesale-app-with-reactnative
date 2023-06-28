import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
// import fetchInitialDeals from './src/Ajax';
import ajax, { fetchInitialDeals } from "./src/Ajax";
import { useEffect, useState } from 'react';
import DealList from './src/components/DealList';

import DealDetail from './src/components/DealDetails';


export default function App() {
  const [deals, setDeals] = useState([]);
  const [currentDealId, setCurrentDealId] = useState(null);

  useEffect(()=>{
    fetchInitialDeals()
    .then(res=>{
      console.log(res)
      setDeals(res)
    })
    //CONFIRM THIS IS THE CORRECT FUNCTIONAL COMPONENT
    .then(response=>{
      console.log(response)
      setCurrentDealId(response)
    })
    .catch(err=>console.log(err))
  },[])
  //THEN TEST THIS
  const currentDeal=()=>{
    deals.find((deal)=>
      deal.key===currentDealId
    )
  }


  console.log(currentDealId)

  // if (currentDealId){
  //   return (<DealDetail deal={currentDeal()}/>)
  // }
  // if (deals.length>0){
  //   <DealList deals={deals} onItemPress={currentDealId}></DealList>
  // }
  return (
    <View style={styles.container}>
      {currentDealId?<DealDetail initialDealData={currentDeal()}/>:<DealList deals={deals} onItemPress={currentDealId}></DealList>}
      <Text>Open up App.js to start working on your app</Text>
      <StatusBar style="auto"/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
