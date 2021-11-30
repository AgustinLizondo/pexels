import React, { useContext } from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import DataProvider, { DataContext } from '../../../screens/ContextAPI/provider';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Dark = '#212121';
const styles = StyleSheet.create({
  textInput: {
    paddingVertical: 8,
    marginTop: 48,
  },
  container:{
      flexDirection: 'row',
  }
})

const SearchingBar = () => {
    
    const { setSearchTerm } = useContext(DataContext);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                onChangeText={
                (text) => {
                    setSearchTerm(text);
                }
                }
                placeholder='Search'
            />
            {/* <Ionicons name={'search'} size={16} color={Dark} /> */}
        </View>
    )
}

export default SearchingBar
