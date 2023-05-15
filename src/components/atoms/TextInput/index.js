import React, {useState} from 'react'
import { StyleSheet, TextInput as Input,Text ,View , TouchableOpacity} from 'react-native'

const TextInput = ({label, password,error,onFocus, ...props}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [hidePass, setHidePass] = useState(password);
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View 
        style={[
          styles.InputContainer,
          {borderColor: error ? 'red' : isFocus ? '#F3640D' : '#DEDEDE'},
          ]}>
        <Input 
          secureTextEntry={hidePass}
          {...props} style={styles.textInput} 
          onFocus= {() =>{
            onFocus();
            setIsFocus(true);
          }}
          onBlur = {() => {
            setIsFocus(false);
          }}
          />
          {password && (
             <TouchableOpacity style={styles.showHide}
               onPress={() => {
                setHidePass(!hidePass);
             }}> 
             {hidePass ? (
              <Text style={styles.textShowHide}>Show</Text>
             ) : (
              <Text style={styles.textShowHide}>Hide</Text>
             )}
           </TouchableOpacity>
          )}
      </View>
          {error && (<Text style={{fontSize: 10, color:'red'}}>{error}</Text>)}
    </View>
  )
}

export default TextInput;

const styles = StyleSheet.create({
  label:{
    fontSize: 18,
    color: '#2B2B2B',
    fontFamily:'Poppins',
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft:10,
  },
  InputContainer:{
    width:'100%',
    height:55,
    marginBottom: 10,
    padding:5,
    borderRadius:10,
    borderWidth:1,
    backgroundColor:'white',
    flexDirection:'row',
    alignItems:'center',
  },
  showHide:{
    marginRight:10,
  },
  textShowHide:{
    fontSize:14,
    color:'#3C3737',
    fontWeight:'600',
  },
  textInput:{
    marginLeft:10,
    color:'#C4C4C4',
    flex:1,
  }
})