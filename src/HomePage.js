// HomePage.js
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9981135393846597/5183951093';

const HomePage = ({ navigation }) => {
  const chapters = [
    'What is Pandas?',
    'Installation and Setup',
    'Data Loading in Pandas',
    'Basic DataFrame Operations',
    'Data Selection and Filtering',
    'Data Manipulation in Pandas',
    'Data Visualization with Pandas',
    'Data Analysis with Pandas',
    'Data Cleaning and Preprocessing with Pandas',
    'Data Export and Saving with Pandas',
    "Data Aggregation with Pandas",
    "Advanced Data Visualization with Pandas"
  ];

  return (
    <View style={styles.container}>
         <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
      <View style={styles.header}>
   
        <Text style={styles.title}>Pandas Tutorial</Text>
      </View>
        {/* Add the AdMobBanner component */}
        
   
      <ScrollView style={styles.scrollView}>
        {chapters.map((chapter, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => navigation.navigate(`Chapter${index + 1}`)}
          >
            <Text style={styles.buttonText}>
              Chapter {index + 1}: {chapter}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Light gray background color
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Dark gray title text color
  },
  scrollView: {
    width: '80%',
  },
  button: {
    backgroundColor: '#555', // Soft gray background color
    padding: 10, // Reduced padding for smaller buttons
    borderRadius: 10, // Rounded button border
    marginBottom: 10, // Spacing between buttons
  },
  buttonText: {
    fontSize: 16, // Reduced font size for smaller buttons
    color: 'white', // White text color
    textAlign: 'center',
  },
});

export default HomePage;
