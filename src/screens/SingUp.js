import React, {useEffect, useState} from 'react';
import {SafeAreaView, 
        Image, 
        View, 
        StyleSheet, 
        TextInput, 
        Text, 
        TouchableOpacity,
       } from 'react-native';



 function SingUp  ()  {

  return (
    
  <View>
    
      <View style={styles.area}>
      <Text>E mail</Text>
      <TextInput style={styles.input}>

      </TextInput>
      </View>

      <View style={styles.area}>
      <Text>Kullanıcı Adı</Text>
      <TextInput style={styles.input}>

      </TextInput>
      </View>

      <View style={styles.area}>
      <Text>Şifre</Text>
      <TextInput style={styles.input}>

      </TextInput>
      </View>

      
      <TouchableOpacity > 
        <View style={styles.button}>
         <Text style={{fontSize:30,}}>Kayıt Oluştur</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity > 
        <View style={styles.button}>
         <Text style={{fontSize:30,}}>Geri Dön</Text>
        </View>
      </TouchableOpacity>
  </View>
)}


const styles=StyleSheet.create({
  input:{
    borderRadius:15,
    borderColor:'red',
    borderWidth:1,
  },

  area:{
    margin:10,
  },
  button:{
    backgroundColor:'blue',
    borderRadius:15,
    alignItems:'center',
    margin:40,

  }
  
})

