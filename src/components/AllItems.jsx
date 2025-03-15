import {FlatList, StyleSheet, View, Text} from 'react-native';
import React from 'react';

const AllItems = ({data}) => {
  return (
    <View>
      <View style={styles.heading}>
        <Text style={styles.headingtext}>Item</Text>
        <Text style={styles.headingtext}>Quantity</Text>
      </View>
      {data.length === 0 ? (
        <Text>No record found</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View
              style={[
                styles.item,
                {backgroundColor: item.quantity < 20 ? '#eb8484' : '#83c986'},
              ]}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemText}>{item.quantity}</Text>
            </View>
          )}
          contentContainerStyle={{gap: 10}}
        />
      )}
      ;
    </View>
  );
};

export default AllItems;

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  headingtext: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 500,
  },
});
