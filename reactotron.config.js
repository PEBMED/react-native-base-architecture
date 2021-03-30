import Reactotron, { networking } from 'reactotron-react-native';

if (__DEV__) {
  Reactotron.configure()
    .useReactNative()
    .use(networking()) // <--- here we go!
    .connect();

  Reactotron.clear();

  console.tron = Reactotron;
} else {
  console.tron = console.log;
}
