/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import StarRating from 'react-native-star-rating-widget';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from '../actions';

const Menu = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.getLoginReducers);
  const category = useSelector(state => state.getCategoryReducers);
  const products = useSelector(state => state.getProductsReducers);

  useEffect(() => {
    console.log('token MENU =>', token);
    dispatch(actions.onCategory(token.data.token));
    dispatch(actions.onProducts(token.data.token));
  }, []);

  useEffect(() => {
    console.log('category.data', category.data);
    console.log('products.data', products.data);
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <View style={[styles.headers, styles.row]}>
        <View style={[styles.menu, styles.row]}>
          <Icon name="arrow-back" size={40} color="#4F8EF7" />
          <Text style={styles.text}>Shoes</Text>
        </View>
        <Icon name="ios-list-circle-outline" size={40} color="#000" />
      </View>
      <View>
        {category?.data && (
          <FlatList
            style={styles.listHeader}
            data={category?.data}
            horizontal
            keyExtractor={(items, idx) => idx}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={styles.card}>
                  <Text style={styles.categoryText}>{item.name}</Text>
                </View>
              );
            }}
          />
        )}
      </View>

      <View>
        {products?.data && (
          <FlatList
            style={styles.listProduct}
            numColumns={2}
            data={products?.data}
            keyExtractor={(items, idx) => idx}
            renderItem={({item}) => {
              return (
                <View style={styles.productCard}>
                  {item.out_of_stock && (
                    <View style={styles.offStock}>
                      <Text style={styles.offStockText}>Out Of Stock</Text>
                    </View>
                  )}
                  <View
                    style={{
                      width: '100%',
                      height: 100,
                    }}>
                    <Image
                      source={{uri: item.image}}
                      style={{width: '100%', height: '100%'}}
                      resizeMode="cover"
                    />
                  </View>
                  <StarRating
                    rating={item.rating}
                    starSize={10}
                    enableHalfStar
                    maxStars={5}
                  />
                  <Text>{item.name}</Text>
                  <View style={styles.wrapperPrice}>
                    <Text style={styles.price}>{item.price}</Text>
                    <Text>{item.off}</Text>
                  </View>
                </View>
              );
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  menu: {
    width: '40%',
    maxWidth: '40%',
  },

  headers: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  text: {
    marginLeft: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },

  listHeader: {
    marginVertical: 20,
    flexGrow: 0,
    paddingHorizontal: 20,
  },

  listProduct: {
    flexGrow: 0,
    paddingHorizontal: 20,
  },

  card: {
    backgroundColor: '#fff',
    height: 'auto',
    flex: 1,
    marginRight: 20,
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 8,
  },
  productCard: {
    backgroundColor: '#fff',
    height: 'auto',
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 12,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  images: {
    maxHeight: 250,
    width: '100%',
    maxWidth: 400,
  },

  wrapperPrice: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  categoryText: {
    fontWeight: 'bold',
  },

  offStock: {
    backgroundColor: 'red',
    paddingVertical: 8,
    paddingHorizontal: 8,
    width: '45%',
    flexGrow: 0,
  },

  offStockText: {
    color: '#fff',
    fontSize: 6,
    fontWeight: 'bold',
  },
});

export default Menu;
