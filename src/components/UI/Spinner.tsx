import {View} from 'react-native'
import { ActivityIndicator } from 'react-native-paper' 


const Spinner = ()=>{
    return (
        <View style={{position:"absolute",left:"50%",top:"50%"}}>
            <ActivityIndicator size={50} style={{marginRight:25}} color={"#07B84A"}  />
        </View>
    )

}
export default Spinner
