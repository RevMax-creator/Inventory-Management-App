import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AllItems from '../components/AllItems';
import CreateItem from '../components/CreateItem';

const HomeScreen = () => {
  const [active, setactive] = useState(0);
  const [data, setdata] = useState([
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dashboard</Text>
      <View style={styles.navbar}>
        <Pressable
          style={[
            styles.navbarbtn,
            active === 0 ? {backgroundColor: '#a7ffb3'} : null,
          ]}
          onPress={() => setactive(0)}>
          <Text
            style={[
              styles.navbarbtntxt,
              active === 0 ? {color: 'white'} : null,
            ]}>
            All Items
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.navbarbtn,
            active === 1 ? {backgroundColor: '#a7ffb3'} : null,
          ]}
          onPress={() => setactive(1)}>
          <Text
            style={[
              styles.navbarbtntxt,
              active === 1 ? {color: 'white'} : null,
            ]}>
            Low in stock
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.navbarbtn,
            active === 2 ? {backgroundColor: '#a7ffb3'} : null,
          ]}
          onPress={() => setactive(2)}>
          <Text
            style={[
              styles.navbarbtntxt,
              active === 2 ? {color: 'white'} : null,
            ]}>
            Create Item
          </Text>
        </Pressable>
      </View>
      {active === 0 && <AllItems data={data} />}
      {active === 1 && <AllItems data={data.filter((item) => item.quantity < 20)} />}
      {active === 2 && <CreateItem data={data} setdata={setdata} />};
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: 'honeydew',
    padding: '3.5%',
  },
  header: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  navbar: {
    flexDirection: 'row',
    gap: 15,
    marginVertical: 20,
  },
  navbarbtn: {
    paddingHorizontal: 10,
    paddingVertical: 2.5,
    borderWidth: 0.85,
    borderRadius: 50,
    borderColor: '#43ed5c',
  },
  navbarbtntxt: {
    color: '#43ed5c',
    fontSize: 16,
  },
});
