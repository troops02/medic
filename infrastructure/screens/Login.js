import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, SafeAreaView,TouchableOpacity } from "react-native";
import { Button, TextInput , Checkbox} from "react-native-paper";
import { useFonts } from 'expo-font';
// import FocusedStatusBar from "../components/FocusedStatusBar";
import { Theme } from "../component/Theme";
import { FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGoogle  } from '@fortawesome/free-brands-svg-icons';
import { Questrial_400Regular } from "@expo-google-fonts/questrial";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

export const Login = ({navigation}) => {
  const [appIsReady, setAppIsReady] = useState(false);
  const presHandler = () => {
    navigation.goBack();
  }
  const [checked, setChecked] = React.useState(false);
  
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
        {/* <FocusedStatusBar backgroundColor={Theme.colors.ui.nurseDullGreen}/> */}
        <View style={styles.container}>
            <TouchableOpacity style={styles.popButton} onPress={presHandler}>
                <FontAwesomeIcon icon={faCircleArrowLeft} size={Theme.sizes[3]}/>

            </TouchableOpacity>
            <View style={styles.loginTextHolder}>
                <Text style={styles.loginText}>Login to Medic</Text>
            </View>
            <View style={styles.EmailAndPassTextHolder}>
                <View style={styles.TextInput1}>
                    <TextInput style={{height:45, backgroundColor:"#fff"}} label="Email or username" mode="outlined" activeOutlineColor="#000"/>
                </View>
                <View style={styles.TextInput1}>
                    <TextInput style={{height:45, backgroundColor:"#fff"}} label="Password" mode="outlined" activeOutlineColor="#000"/>
                </View>
                <View style={styles.checkBoxHolder}>
                    <Checkbox
                      status={checked ? 'checked' : 'unchecked'}
                      style={{height:2}}
                      onPress={() => {
                      setChecked(!checked);
                      }}
                    />
                    <Text style={{marginTop:10}}>show password</Text>
                </View>
                <View style={{marginHorizontal:20, marginTop:20}}>
                    <Button mode='contained' color='#000'>Login</Button>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop:50}}>
                    <View style={{flex:4, height: 0.5, backgroundColor: 'black'}} />
                    <View>
                        <Text style={{width: 90, textAlign: 'center', fontSize:Theme.sizes[3], color:"#909090", fontWeight:"light"}}>or LOGIN WITH</Text>
                    </View>
                    <View style={{flex:4, height: 0.5, backgroundColor: 'black'}} />
                </View>
                <View style={styles.logoHolder}>
                    <View style={styles.faFas}>
                        <FontAwesomeIcon icon={faApple} size={Theme.sizes[4]}/>
                    </View>
                    <View  style={styles.faFas}>
                        <FontAwesomeIcon icon={faSquareFacebook} size={Theme.sizes[4]}/>
                    </View>
                    <View  style={styles.faFas}>
                        <FontAwesomeIcon icon={faGoogle} size={Theme.sizes[4]}/>
                    </View>
                </View>
            </View>

        </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    areaView: {
      flex:1,
      backgroundColor:"#fff"
    },
    container:{
      flex:1,
      padding:10,
      backgroundColor:"#fff"
    },
    loginTextHolder:{
      marginTop:Theme.sizes[6]
    },
    loginText:{
      fontSize:Theme.fonts.fontSizePoint.h4,
      fontWeight:"bold"
    },
    EmailAndPassTextHolder:{
      marginVertical:Theme.sizes[3]
    },
    TextInput1:{
      marginVertical:10
    },
    checkBoxHolder:{
      flexDirection:"row"
    },
    logoHolder:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      marginTop:50

    },
    faFas:{
        marginHorizontal:20
    }
});