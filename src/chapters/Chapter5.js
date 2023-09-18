// Chapter5.js
import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { styles } from '../styles/tutorialStyles'; // Import styles
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9981135393846597/5183951093';


const Chapter5 = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Chapter 5: Data Selection and Filtering</Text>
      <Text style={styles.paragraph}>
        In pandas, you can select specific columns and filter rows based on conditions. Let's explore these concepts further.
      </Text>

      <Text style={styles.subheading}>Selecting Specific Columns</Text>
      <Text style={styles.paragraph}>
        To select specific columns from a DataFrame, you can use double square brackets.
        For example, if you have a DataFrame df and want to select columns 'Column1' and 'Column2':
      </Text>
      <Text style={styles.code}>
        {'selected_columns = df[["Column1", "Column2"]]'}
      </Text>

      <Text style={styles.subheading}>Filtering Rows</Text>
      <Text style={styles.paragraph}>
        You can filter rows based on conditions. For instance, to filter rows where the 'Age' column is greater than 30:
      </Text>
      <Text style={styles.code}>
        {'filtered_data = df[df["Age"] > 30]'}
      </Text>

      <Text style={styles.subheading}>Example: Selecting Specific Columns</Text>
      <Text style={styles.paragraph}>
        Let's select the 'Product' and 'Price' columns from a sales DataFrame:
      </Text>
      <Text style={styles.code}>
        {'selected_data = df[["Product", "Price"]]\n' +
        'print(selected_data.head())'}
      </Text>

      {/* Add more content and examples for Chapter 5 as needed */}
      
      {/* Add space at the end to make the button more accessible */}
      <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />

      <Button
        title="Next: Chapter 6"
        onPress={() => navigation.navigate('Chapter6')}
      />
    </ScrollView>
  );
};

export default Chapter5;
