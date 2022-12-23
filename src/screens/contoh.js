import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Homepage = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [Search, setSearch] = useState('')
    console.log('movie',movies)

    useEffect(() => {
        axios
            .get(
                'https://api.themoviedb.org/3/trending/all/day?api_key=620b4a7bff733d429a31618dd213ec0f'
            )
            .then((res) => {
                console.log('res', res);
                setMovies(res.data.results)
            });
    }, []);
    useEffect(() => {
      Axios.get(
        'https://api.themoviedb.org/3/movie/' +
          route.params.movie_id +
          '?api_key=570c36d75740509c00d865a804d826a5&language=en-US',
      ).then((e) => setDetails(e.data));
    }, []);
    useEffect(() => {
      Axios.get(
          'https://api.themoviedb.org/3/movie/' +
          route.params.movie_id +
          '?api_key=3e20a7c466ac2ae7ed3b5caafa316c1b&language=en-US',
      ).then((e) => setDetails(e.data));
  }, []);
  return (
    <View>
      <Text>Homepage</Text>
    </View>
  )
}

export default Homepage