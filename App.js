import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SafeViewAndroid from './components/SafeViewAndroid';
import Navigation from './Navigation';

export default function App() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
