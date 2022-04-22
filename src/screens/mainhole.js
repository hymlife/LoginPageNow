import React, {useEffect, useState} from 'react';
import {SafeAreaView, 
        Image, 
        View, 
        StyleSheet, 
        TextInput, 
        Text, 
        TouchableOpacity,
       } from 'react-native';


 function mainhole() {

  return (
    //Page Full Area
    <View styles={{flex:1}}>
      
      <View >
         <Text style={{fontSize:35}}> Login Page home</Text>
      </View>


      <View style={{marginTop:150}}>
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
         <Text style={{fontSize:30,}}>Giriş</Text>
        </View>
      </TouchableOpacity>
     

      
      <TouchableOpacity > 
        <View style={styles.button}>
          <Text style={{fontSize:30,}}>Kayıt Ol</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity style={{alignItems:'flex-end',marginRight:15}}>
        <Text style={{fontSize:15}}>Şifremi Unuttum</Text>
      </TouchableOpacity>
      </View>
     
      
    </View>
  );
};

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
