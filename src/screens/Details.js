import Axios from 'axios';
import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Image, Animated,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default function Detail({route, navigation}) {
  const [detail, setDetails] = useState({});
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.loop(
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  useEffect(() => {
    Axios.get(
        'https://api.themoviedb.org/3/movie/' +
        route.params.movie_id +
        '?api_key=3e20a7c466ac2ae7ed3b5caafa316c1b&language=en-US',
    ).then((e) => setDetails(e.data));
  }, []);

      return (
        <View style={{flex: 1, padding: 10,backgroundColor:'#cc0000'}}>
        
         <ScrollView>
          <View>
              <TouchableOpacity
                  onPress={async () => {
                    navigation.navigate('Homepage', {});
                  }}>
                  <Text style={{
                    color:'white',
                    fontWeight:'bold',
                    fontFamily:'times new roman',
                    top:10,
                    backgroundColor:'black',
                    width:60,
                    paddingVertical:2,
                    textAlign:'center',
                    borderRadius: 10,
                    fontSize:10}}>
                      Back
                  </Text>
              </TouchableOpacity>
          
            
            <Image
              source={{
                uri: 'https://image.tmdb.org/t/p/w500' + detail.backdrop_path,
              }}
              style={{height: 200, width: 340,top:20,align:'center',resizeMode:'stretch',opacity:1}}

            />
            
          </View>
          
          <View
            style={{
              padding: 10,
              margin: 10,
              top:5,
              width:350,
              right:20
            }}>
              {/* gambar ke dua */}
              <Image
              source={{
                uri: 'https://image.tmdb.org/t/p/w500' + detail.poster_path,
              }}
              style={{height: 110, width: 80,top:112,left:10, align:'right', marginRight:10}}
            />

            {/* judul film */}
            <Text style={{
              fontSize: 16, 
              textAlign:'center', 
              fontWeight: 'bold',
              color:'#d9d9d9',
              fontFamily:'times new roman',
              width:340,
              bottom:90,
              marginBottom: 5,}}>
              {detail.title}
            </Text>
            <Animated.Text
              style={{
                bottom:80,
                color:'white',
                opacity: fadeAnim,
                alignSelf: 'center',
                fontFamily:'times new roman',
                fontSize:12,
                textAlign:'center',
                paddingHorizontal:10,
                backgroundColor:'gray',
                width:85,
                paddingVertical:5,
                borderRadius:10,
                marginBottom: 10,
                left: 5,
              }}>
              {detail.status}
            </Animated.Text>

            {/* detail isi */}
            <Text style={{color:'white',fontSize:12,bottom:60,left:100,width:140}}>Date            : {detail.release_date}</Text>
            <Text style={{color:'white',fontSize:12,bottom:55,left:100,width:140}}>Rate            : {detail.vote_average}</Text>
            <Text style={{color:'white',fontSize:12,bottom:50,left:100,width:140}}>popularity      : {detail.popularity}</Text>
            <Text style={{color:'white',fontSize:12,bottom:45,left:100,width:140}}>Vote Count      : {detail.vote_count}</Text>
            <Text style={{color:'white',fontSize:12,bottom:40,left:100,width:140}}>Language        : {detail.original_language}</Text>
            <Text style={{color:'white',fontSize:12,bottom:35,left:100,width:140}}>Country         : US</Text>

            <Text style={{left:10, color:'#ffffff', fontWeight:'bold', fontSize: 20, marginBottom:5,}}>Deskripsi</Text>
            <Text style={{textAlign: 'justify',color:'white',fontSize:15, paddingHorizontal:10,}}>{detail.overview}</Text>
          </View>
         </ScrollView>  
        </View>
      );
}