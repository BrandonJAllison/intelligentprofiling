import React from 'react'
import { View, TextInput, TouchableOpacity,StyleSheet, } from 'react-native';
import { Container, Header, Content, ListItem, Text, Radio, Right, Left } from 'native-base';

const q4_4 = props => {

    return (
       <Container style={styles.container}>
           <View style={{flexDirection:'row'}}>
               <Text style={{color:'blue', fontSize:10, marginRight:160}}>Externally Focused</Text>
               <Text style={{color:'blue', fontSize:10}}>Internally Focused</Text>
           </View>
           <View style={{flexDirection:'row', margin:5}}>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Strong Resemblance</Text>
                   <Radio selected={false} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text}>Some Resemblance</Text>
                   <Radio selected={false} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Neautral</Text>
                   <Radio selected={true} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text}>Some Resemblance</Text>
                   <Radio selected={false} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Strong Resemblance</Text>
                   <Radio selected={false} />
               </View>      
           </View>

           <View style={{flexDirection:'row', margin:5}}>
               <Text style={{color:'blue', fontSize:10, marginRight:160}}>Takes Action</Text>
               <Text style={{color:'blue', fontSize:10}}>Takes Time to Reflect </Text>
           </View>
           <View style={{flexDirection:'row'}}>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Strong Resemblance</Text>
                   <Radio selected={false} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text}>Some Resemblance</Text>
                   <Radio selected={false} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Neautral</Text>
                   <Radio selected={true} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text}>Some Resemblance</Text>
                   <Radio selected={false} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Strong Resemblance</Text>
                   <Radio selected={false} />
               </View>      
           </View>

           <View style={{flexDirection:'row', margin:5}}>
               <Text style={{color:'blue', fontSize:10, marginRight:160}}>Publicly Disclosing</Text>
               <Text style={{color:'blue', fontSize:10}}>Publicly Guarded</Text>
           </View>
           <View style={{flexDirection:'row'}}>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Strong Resemblance</Text>
                   <Radio selected={false} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text}>Some Resemblance</Text>
                   <Radio selected={false} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Neautral</Text>
                   <Radio selected={true} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text}>Some Resemblance</Text>
                   <Radio selected={false} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Strong Resemblance</Text>
                   <Radio selected={false} />
               </View>      
           </View>

           <View style={{flexDirection:'row', margin:5}}>
               <Text style={{color:'blue', fontSize:10, marginRight:160}}>Gregarious</Text>
               <Text style={{color:'blue', fontSize:10}}>Reserved</Text>
           </View>
           <View style={{flexDirection:'row'}}>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Strong Resemblance</Text>
                   <Radio selected={false} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text}>Some Resemblance</Text>
                   <Radio selected={false} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Neautral</Text>
                   <Radio selected={true} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text}>Some Resemblance</Text>
                   <Radio selected={false} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Strong Resemblance</Text>
                   <Radio selected={false} />
               </View>      
           </View>

           <View style={{flexDirection:'row', margin:5}}>
               <Text style={{color:'blue', fontSize:10, marginRight:160}}>Thinks Out Loud</Text>
               <Text style={{color:'blue', fontSize:10}}>Thinks Internally</Text>
           </View>
           <View style={{flexDirection:'row'}}>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Strong Resemblance</Text>
                   <Radio selected={false} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text}>Some Resemblance</Text>
                   <Radio selected={false} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Neautral</Text>
                   <Radio selected={true} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text}>Some Resemblance</Text>
                   <Radio selected={false} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Strong Resemblance</Text>
                   <Radio selected={false} />
               </View>      
           </View>

           <View style={{flexDirection:'row', margin:5}}>
               <Text style={{color:'blue', fontSize:10, marginRight:160}}>Expressive</Text>
               <Text style={{color:'blue', fontSize:10}}>Contained</Text>
           </View>
           <View style={{flexDirection:'row'}}>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Strong Resemblance</Text>
                   <Radio selected={false} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text}>Some Resemblance</Text>
                   <Radio selected={false} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Neautral</Text>
                   <Radio selected={true} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text}>Some Resemblance</Text>
                   <Radio selected={false} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Strong Resemblance</Text>
                   <Radio selected={false} />
               </View>      
           </View>

           <View style={{flexDirection:'row', margin:5}}>
               <Text style={{color:'blue', fontSize:10, marginRight:160}}>Many Experiences</Text>
               <Text style={{color:'blue', fontSize:10}}>Deep Experiences</Text>
           </View>
           <View style={{flexDirection:'row'}}>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Strong Resemblance</Text>
                   <Radio selected={false} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text}>Some Resemblance</Text>
                   <Radio selected={false} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Neautral</Text>
                   <Radio selected={true} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text}>Some Resemblance</Text>
                   <Radio selected={false} />
               </View>
               <View style={{flexDirection:'column', alignItems:'center', margin: 10}}>
                   <Text style={styles.text} >Strong Resemblance</Text>
                   <Radio selected={false} />
               </View>      
           </View>

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
  });

export default q4_4