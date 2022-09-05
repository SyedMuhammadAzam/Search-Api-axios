import React from 'react'
import { StyleSheet, Text, View , Image } from 'react-native'

const ResultDetails = ({result}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.Image} source={{uri : result.image_url}} />
            <Text style={styles.text}>{result.name}</Text>

            <Text>⭐{result.rating} Stars   ||   {result.review_count} Reviews </Text>
        </View>
    )
}

export default ResultDetails

const styles = StyleSheet.create({
    Image : {
        width:250,
        height:120,
        borderRadius:8,
        marginTop:8,
    },
    container:{
        padding:6,
        marginLeft:6,
    },
    text :{
        fontWeight:'bold'
    }
})
