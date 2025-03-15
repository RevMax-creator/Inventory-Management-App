import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CreateItem = ({data, setdata}) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [editItemId, seteditItemId] = useState(null);

  const addItemHandler = () => {
    const newItem = {id: Date.now(), name, quantity};
    setdata([...data, newItem]);
    setName('');
    setQuantity('');
    setIsEdit(false);
  };

  const editItemHandler = item => {
    setIsEdit(true);
    setName(item.name);
    seteditItemId(item.id);
  };

  const updateItemHandler = () => {
    setdata(
      data.map(item => {
        return item.id === editItemId
          ? {...item, name: name, quantity: quantity}
          : item;
      }),
    );
    setName('');
    setQuantity('');
    setIsEdit(false);
  };

  const deleteItemHandler = id => {
    setdata(data.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter the name of item..."
        placeholderTextColor="#999"
        style={styles.input}
        value={name}
        onChangeText={txt => setName(txt)}
      />
      <TextInput
        placeholder="Enter the quantity of item..."
        placeholderTextColor="#999"
        style={styles.input}
        value={quantity}
        keyboardType="numeric"
        onChangeText={int => setQuantity(int)}
      />
      <Pressable
        style={styles.btn}
        onPress={() => (isEdit ? updateItemHandler() : addItemHandler())}>
        <Text style={styles.btntxt}>{isEdit ? 'Edit Item' : 'Add item'}</Text>
      </Pressable>
      <View style={styles.itemcontainer}>
        <Text style={styles.headingtext}>All Items</Text>
        {data.length > 0 ? (
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View
                style={[
                  styles.item,
                  {backgroundColor: item.quantity < 20 ? '#eb8484' : '#83c986'},
                ]}>
                <Text>{item.name}</Text>
                <View style={styles.params}>
                  <Text>{item.quantity}</Text>
                  <Pressable onPress={() => editItemHandler(item)}>
                    <Icon name="edit" size={16} color="#000" />
                  </Pressable>
                  <Pressable onPress={() => deleteItemHandler(item.id)}>
                    <Icon name="delete" size={16} color="#000" />
                  </Pressable>
                </View>
              </View>
            )}
            contentContainerStyle={{gap: 10}}
          />
        ) : (
          <Text>No Items available, add your first item</Text>
        )}
      </View>
    </View>
  );
};

export default CreateItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: '4%',
    gap: 10,
  },
  input: {
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  btn: {
    backgroundColor: '#e2c3ff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btntxt: {
    color: 'white',
    fontSize: 16,
    fontWeight: 600,
  },
  itemcontainer: {
    marginTop: 10,
  },
  headingtext: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 8,
  },
  params: {
    flexDirection: 'row',
    gap: 20,
  },
});
