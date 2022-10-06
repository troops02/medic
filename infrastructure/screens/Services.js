import { useEffect, useState } from "react";
import { View,Text,StyleSheet,SafeAreaView, ScrollView, Platform, StatusBar,FlatList, Alert,TouchableOpacity} from "react-native";
import { Card,Title,Button } from "react-native-paper";
import { Theme } from "../component/Theme";
import { db } from "./services/firebase";
import { onSnapshot,collection, getDoc, doc } from "firebase/firestore";



export function Services({navigation}){
    const [services,setServices] =useState([])
    

    useEffect(() =>{
        const allServices = [];


        onSnapshot(collection(db,'services'),(onSnap) => {
            onSnap.forEach(item =>{
                const itemData =  item.data();
                itemData.docId = item.id;
                allServices.push(item.data());
                setServices(allServices);
            })
        })
    },[])

  
        
   

    return(
        <SafeAreaView style={styles.areaView}>
            <View style={styles.container}>
                    <View styles={styles.servicesList}>
                        <FlatList
                        data={services} 
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
                                            onPress = {() => navigation.navigate('Service',{serviceUID:services.docId})}>
                                    Order
                                        </Button>
                                        
                                    </Card.Actions>
                                </Card>
                        
                            )
                        }} 
                        key={({item}) => item.docId}
                        showsHorizontalScrollIndicator={false}/>
                    </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    areaView:{
        flex:1,
        marginTop:Platform.OS === 'android' ? StatusBar.currentHeight : null
    },
    container:{
        flex:1,
        paddingHorizontal:Theme.sizes[3],
        paddingBottom:Theme.sizes[3],
    },
    priceRow:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    priceRowText:{
        color:'gray'
    },
})