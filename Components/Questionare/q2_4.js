import React, {useState} from 'react'
import { View, TextInput, TouchableOpacity,StyleSheet, } from 'react-native';
import { Container, Header, Content, ListItem, Text, Radio, Right, Left } from 'native-base';

const q2_4 = props => {

    const [focused, setFocused] = useState(0)
    const [action, setAction] = useState(0)
    const [guarded, setGuarded] = useState(0)
    const [reserved, setReserved] = useState(0)
    const [thinks, setThinks] = useState(0)
    const [express, setExpress] = useState(0)
    const [experiences, setExperiences] = useState(0)
    const [total, setTotal] = useState(0)
    const [letter, setLetter] = useState('I')

    const calculate = () => {
        setTotal(focused + action + guarded + reserved + thinks + express + experiences)
        if (total >= 0){
            setLetter('I')
        }else{
            setLetter('E')
        }
    }

    return (
       <Container style={styles.container}>
           <View style={{flexDirection:'row'}}>
               <Text style={{color:'blue', fontSize:10, marginRight:160}}>Externally Focused</Text>
               <Text style={{color:'blue', fontSize:10}}>Internally Focused</Text>
           </View>
           <View style={{flexDirection:'row', margin:5}}>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Strong Resemblance</Text>
                   <Radio onPress={()=> setFocused(-2)} selected={focused == -2} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text}>Some Resemblance</Text>
                   <Radio onPress={()=> setFocused(-1)} selected={focused == -1}/>
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Neautral</Text>
                   <Radio onPress={()=> setFocused(0)} selected={focused == 0} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text}>Some Resemblance</Text>
                   <Radio onPress={()=> setFocused(1)} selected={focused == 1} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Strong Resemblance</Text>
                   <Radio onPress={()=> setFocused(2)} selected={focused == 2} />
               </View>      
           </View>

           <View style={{flexDirection:'row', margin:5}}>
               <Text style={{color:'blue', fontSize:10, marginRight:160}}>Takes Action</Text>
               <Text style={{color:'blue', fontSize:10}}>Takes Time to Reflect </Text>
           </View>
           <View style={{flexDirection:'row'}}>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Strong Resemblance</Text>
                   <Radio onPress={()=> setAction(-2)} selected={action == -2}/>
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text}>Some Resemblance</Text>
                   <Radio onPress={()=> setAction(-1)} selected={action == -1} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Neautral</Text>
                   <Radio onPress={()=> setAction(0)} selected={action == 0} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text}>Some Resemblance</Text>
                   <Radio onPress={()=> setAction(1)} selected={action == 1} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Strong Resemblance</Text>
                   <Radio onPress={()=> setAction(2)} selected={action == 2} />
               </View>      
           </View>

           <View style={{flexDirection:'row', margin:5}}>
               <Text style={{color:'blue', fontSize:10, marginRight:160}}>Publicly Disclosing</Text>
               <Text style={{color:'blue', fontSize:10}}>Publicly Guarded</Text>
           </View>
           <View style={{flexDirection:'row'}}>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Strong Resemblance</Text>
                   <Radio onPress={()=> setGuarded(-2)} selected={guarded == -2} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text}>Some Resemblance</Text>
                   <Radio onPress={()=> setGuarded(-1)} selected={guarded == -1}  />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Neautral</Text>
                   <Radio onPress={()=> setGuarded(0)} selected={guarded == 0}  />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text}>Some Resemblance</Text>
                   <Radio onPress={()=> setGuarded(1)} selected={guarded == 1}  />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Strong Resemblance</Text>
                   <Radio onPress={()=> setGuarded(2)} selected={guarded == 2} />
               </View>      
           </View>

           <View style={{flexDirection:'row', margin:5}}>
               <Text style={{color:'blue', fontSize:10, marginRight:160}}>Gregarious</Text>
               <Text style={{color:'blue', fontSize:10}}>Reserved</Text>
           </View>
           <View style={{flexDirection:'row'}}>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Strong Resemblance</Text>
                   <Radio onPress={()=> setReserved(-2)} selected={reserved == -2}  />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text}>Some Resemblance</Text>
                   <Radio onPress={()=> setReserved(-1)} selected={reserved == -1}  />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Neautral</Text>
                   <Radio onPress={()=> setReserved(0)} selected={reserved == 0}  />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text}>Some Resemblance</Text>
                   <Radio onPress={()=> setReserved(1)} selected={reserved == 1}  />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Strong Resemblance</Text>
                   <Radio onPress={()=> setReserved(2)} selected={reserved == 2}  />
               </View>      
           </View>

           <View style={{flexDirection:'row', margin:5}}>
               <Text style={{color:'blue', fontSize:10, marginRight:160}}>Thinks Out Loud</Text>
               <Text style={{color:'blue', fontSize:10}}>Thinks Internally</Text>
           </View>
           <View style={{flexDirection:'row'}}>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Strong Resemblance</Text>
                   <Radio onPress={()=> setThinks(-2)} selected={thinks == -2}  />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text}>Some Resemblance</Text>
                   <Radio onPress={()=> setThinks(-1)} selected={thinks == -1} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Neautral</Text>
                   <Radio onPress={()=> setThinks(0)} selected={thinks == 0} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text}>Some Resemblance</Text>
                   <Radio onPress={()=> setThinks(1)} selected={thinks == 1} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Strong Resemblance</Text>
                   <Radio onPress={()=> setThinks(2)} selected={thinks == 2} />
               </View>      
           </View>

           <View style={{flexDirection:'row', margin:5}}>
               <Text style={{color:'blue', fontSize:10, marginRight:160}}>Expressive</Text>
               <Text style={{color:'blue', fontSize:10}}>Contained</Text>
           </View>
           <View style={{flexDirection:'row'}}>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Strong Resemblance</Text>
                   <Radio onPress={()=> setExpress(-2)} selected={express == -2} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text}>Some Resemblance</Text>
                   <Radio onPress={()=> setExpress(-1)} selected={express == -1} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Neautral</Text>
                   <Radio onPress={()=> setExpress(0)} selected={express == 0} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text}>Some Resemblance</Text>
                   <Radio onPress={()=> setExpress(1)} selected={express == 1} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Strong Resemblance</Text>
                   <Radio onPress={()=> setExpress(2)} selected={express == 2} />
               </View>      
           </View>

           <View style={{flexDirection:'row', margin:5}}>
               <Text style={{color:'blue', fontSize:10, marginRight:160}}>Many Experiences</Text>
               <Text style={{color:'blue', fontSize:10}}>Deep Experiences</Text>
           </View>
           <View style={{flexDirection:'row'}}>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Strong Resemblance</Text>
                   <Radio onPress={()=> setExperiences(-2)} selected={experiences == -2} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text}>Some Resemblance</Text>
                   <Radio onPress={()=> setExperiences(-1)} selected={experiences == -1} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Neautral</Text>
                   <Radio onPress={()=> setExperiences(0)} selected={experiences == 0} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text}>Some Resemblance</Text>
                   <Radio onPress={()=> setExperiences(1)} selected={experiences == 1} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Strong Resemblance</Text>
                   <Radio onPress={()=> setExperiences(2)} selected={experiences == 2} />
               </View>      
           </View>

           <TouchableOpacity
         style={styles.buttons}
         onPress ={() => calculate()}>
         <Text style={{color:'white'}}> CONTINUE </Text>
        </TouchableOpacity>
        <Text>{total}</Text>
        <Text>{letter}</Text>
       </Container>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#F5FCFF',
    },
    text: {
      fontSize: 7,
      
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    buttons:{
        margin: '5%',
        backgroundColor: '#1DD58D',
        borderRadius: 15,
        borderColor:'black',
        borderWidth:2,
        alignItems:'center',
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
        }
  });

export default q2_4