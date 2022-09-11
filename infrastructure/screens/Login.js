import { useState, useEffect, useCallback } from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Questrial_400Regular } from "@expo-google-fonts/questrial";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faCross } from '@fortawesome/free-solid-svg-icons';
import {Button, TextInput} from 'react-native-paper';
import { Theme } from '../component/Theme';


export const Login = ({navigation}) => {
  const [appIsReady, setAppIsReady] = useState(false);
  
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
    return(
      <SafeAreaView style={styles.areaView}>
          <View style={styles.container}>
              <ScrollView>
                    <View style={styles.brandBlock}>
                        <FontAwesomeIcon icon={faCross} size={Theme.sizes[4]} color={Theme.colors.brand.brandRed}/>
                        <Text style={styles.brandName}>medic</Text>
                    </View>

                    <Text style={styles.headText}>Welcome Back</Text>

          
                    
                        <TextInput label='Email address'
                        mode='outlined' outlineColor={Theme.colors.bg.tertiary} 
                        activeOutlineColor={Theme.colors.bg.quartenary} 
                        keyboardType='email-address'
                        />

                        <TextInput label='Password' 
                        mode='outlined' outlineColor={Theme.colors.bg.tertiary} 
                        activeOutlineColor={Theme.colors.bg.quartenary} 
                        secureTextEntry={true}/>
                    
                    <View style={styles.topUp}></View>
                    <Button mode='contained' 
                    style={{paddingVertical:Theme.sizes[3], marginTop:Theme.sizes[2]}}>Login
                    </Button>


                    <View style={styles.textInline}>
                        <Text style={styles.ctaText}>You don't have an account?</Text>
                        <TouchableOpacity
                        onPress={() => navigation.navigate('Signup')}>
                            <Text style={[styles.ctaText,{color:Theme.colors.ui.nurseDullGreen}]}>  Signup</Text>
                        </TouchableOpacity>
                    </View>
              </ScrollView>
          </View>
      </SafeAreaView>
    )}


    const styles = StyleSheet.create({
      areaView:{
          flex:1,
      },
      brandName:{
        fontSize:Theme.fonts.fontSizePoint.h4,
        fontFamily:'Questrial_400Regular',
    },
      container:{
        flex:1,
        padding:Theme.sizes[3],
        backgroundColor:'white'
      },
      brandBlock:{
          flexDirection:'row',
          alignItems:'center',
      },
      headText:{
        fontSize:Theme.fonts.fontSizePoint.h3,
        marginVertical:Theme.sizes[4],
      },
      btnGroup:{
      flexDirection:'row',
      display:'row'
      },  
      textInline:{
        flexDirection:'row',
        marginVertical:Theme.sizes[2],
        fontWeight:'bold',
        marginTop:10
    },
    topUp:{
        marginTop:50
    },
    })