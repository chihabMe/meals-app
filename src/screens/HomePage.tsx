import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import colors from '../utils/colors'

const HomePage:React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomePage</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container :{
        backgroundColor:colors.bgLight,
        flexDirection:'column',
        flexGrow:1

    },
    title :{
        color:colors.title
    },
})

export default HomePage