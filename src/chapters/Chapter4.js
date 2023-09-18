// Chapter4.js
import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { styles } from '../styles/tutorialStyles'; // Import styles
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9981135393846597/5183951093';

const Chapter4 = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Chapter 4: Basic DataFrame Operations</Text>
      <Text style={styles.paragraph}>
        Once you have a DataFrame, you can perform various operations on it. Let's explore some basic DataFrame operations.
      </Text>

      <Text style={styles.subheading}>Viewing Data</Text>
      <Text style={styles.paragraph}>
        You can view the first few rows of a DataFrame using the `.head()` method:
      </Text>
      <Text style={styles.code}>
        {'import pandas as pd\n' +
        'df = pd.read_csv("data.csv")\n' +
        'print(df.head())'}
      </Text>

      <Text style={styles.subheading}>Selection and Filtering</Text>
      <Text style={styles.paragraph}>
        To select specific columns from a DataFrame, you can use double square brackets:
      </Text>
      <Text style={styles.code}>
        {'# Select specific columns\n' +
        'selected_columns = df[["Column1", "Column2"]]'}
      </Text>

      <Text style={styles.subheading}>Example: Filtering Data</Text>
      <Text style={styles.paragraph}>
        Let's filter the DataFrame to show only rows where the 'Sales' column is greater than 1000:
      </Text>
      <Text style={styles.code}>
        {'filtered_data = df[df["Sales"] > 1000]\n' +
        'print(filtered_data.head())'}
      </Text>

      {/* Add more content and examples for Chapter 4 as needed */}
      
      {/* Add space at the end to make the button more accessible */}
      <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />

      <Button
        title="Next: Chapter 5"
        onPress={() => navigation.navigate('Chapter5')}
      />
    </ScrollView>
  );
};

export default Chapter4;
