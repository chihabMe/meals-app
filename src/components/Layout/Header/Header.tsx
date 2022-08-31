import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import colors from '../../../utils/colors'
import { spacing } from '../../../utils/sizes'

const Headers = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Headers</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container :{
        backgroundColor:colors.bg,
        paddingVertical:spacing._lg,

    },
    title :{
        color:colors.title
    },
})

export default Headers