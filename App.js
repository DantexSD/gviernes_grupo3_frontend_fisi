import { StyleSheet, Text, View } from 'react-native';
import SafeViewAndroid from './components/SafeViewAndroid';
import Navigation from './Navigation';

export default function App() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
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
