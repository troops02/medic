import { useState, useEffect, useCallback } from "react";
import { View, Text, SafeAreaView, StyleSheet,FlatList,Platform,} from 'react-native'
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Questrial_400Regular } from "@expo-google-fonts/questrial";
import { FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faCross} from "@fortawesome/free-solid-svg-icons";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons"
import { Button} from "react-native-paper";
import { Theme } from "../component/Theme";
import { db } from "./services/firebase";
import { collection,where,query,onSnapshot } from "firebase/firestore";
import { Card } from "react-native-paper";

export function Category({navigation,route}) {
  const [appIsReady, setAppIsReady] = useState(false);
  const [service,setServices] = useState([]); 
  const {categoryName} = route.params
  
  //filter collection of booins by user's UID
  const q = collection(db,'services');
  const filter = query(q,where('category','==',categoryName));

  useEffect(() =>{
    const allServices = [];

    onSnapshot(filter,(onSnap) => {
        onSnap.forEach(item =>{
            const itemData =  item.data();
            itemData.docId = item.id;
            allServices.push(item.data());
            setServices(allServices);
        })
    })
},[]);

  useEffect(() => {
      async function prepare() {
          try {
              await Font.loadAsync({Questrial_400Regular});
              await new Promise(resolve => setTimeout(resolve, 1000));
          } catch (e) {
              console.warn(e);
          } finally {
              setAppIsReady(true);
          }
      }
      prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
      if (appIsReady) {
      await SplashScreen.hideAsync();
      }
  }, [appIsReady]);

  if (!appIsReady) {
      return null;
  }

  return (
      <SafeAreaView style={styles.areaView}>
         <View style ={styles.container}>
         <View styles={styles.servicesList}>
                        <FlatList
                        data={service} 
                        renderItem={({item}) =>{
                            return (
                                <Card style={{marginBottom:Theme[2]}}>
                                    <Card.Cover source={{ uri: item.imageUrl }} />
                                    
                                        <Card.Title title={item.title} subtitle={'name'}/>
                                        <Card.Content>
                                        <View style={styles.priceRow}>
                                            <Text style={styles.priceRowText}>NGN{item.price}</Text>                     
                                            <Text style={styles.priceRowText}>{item.category}</Text>                     
                                        </View>
                                    </Card.Content>
                                    <Card.Actions>
                                        <Button 
                                        mode='contained' 
                                        color={Theme.colors.ui.nursePurple} 
                                        contentStyle={{paddingHorizontal:8}}
                                        >Order</Button>
                                    </Card.Actions>
                                </Card>
                            )
                        }} 
                        key={({item}) => item.docId}
                        showsHorizontalScrollIndicator={false}/>
                    </View>
        
          </View>
      </SafeAreaView>
  );
}




const styles = StyleSheet.create({
    areaView:{
        flex:1,
    },
    container:{
        flex:1,
        padding:Theme.sizes[3],
    },
    priceRow:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    priceRowText:{
        color:'gray'
    },
});
 