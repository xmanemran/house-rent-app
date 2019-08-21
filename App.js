import React, {Fragment} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        />
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#FFF',
  },
});

export default App;
