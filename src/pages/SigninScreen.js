import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, useWindowDimensions, Text} from 'react-native';
import ImgLogin from '../assets/key.png';
import Input from '../components/Input';
import CustomButton from '../components/CustomButton';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from '../actions';
const SigninScreen = ({navigation}) => {
  console.log('navigation =>', navigation);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();

  const token = useSelector(state => state.getLoginReducers);

  const onPressSubmit = () => {
    dispatch(
      actions.onLogin({
        email: email,
        password: password,
      }),
    );
  };

  useEffect(() => {
    if (token.data.token) {
      navigation.navigate('Menu');
    }
  }, [navigation, token]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <Image
        source={ImgLogin}
        style={[styles.images, {height: height * 0.3}]}
        resizeMode="cover"
      />
      <Input
        placeholder="Enter Email"
        value={email}
        setValue={setEmail}
        onChangeText={text => setEmail(text)}
      />
      <Input
        placeholder="Enter Password"
        value={password}
        setValue={setPassword}
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <CustomButton text="Submit" onPress={onPressSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  images: {
    maxHeight: 250,
    width: '70%',
    maxWidth: 400,
    marginVertical: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default SigninScreen;
