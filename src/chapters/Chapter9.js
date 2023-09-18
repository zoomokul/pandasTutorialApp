// Chapter9.js
import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { styles } from '../styles/tutorialStyles'; // Import styles
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9981135393846597/5183951093';

const Chapter9 = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Chapter 9: Data Cleaning and Preprocessing with Pandas</Text>
      <Text style={styles.paragraph}>
        Data cleaning and preprocessing are crucial steps in data analysis. Pandas offers a wide range of tools for cleaning and preparing your data for analysis.
      </Text>

      <Text style={styles.subheading}>Handling Missing Data</Text>
      <Text style={styles.paragraph}>
        You can deal with missing data using functions like `dropna()` and `fillna()` to remove or replace missing values.
      </Text>
      <Text style={styles.code}>
        {'# Remove rows with missing values\n' +
        'df.dropna()\n\n' +
        '# Fill missing values with a specific value\n' +
        'df.fillna(0)'}
      </Text>

      <Text style={styles.subheading}>Data Transformation</Text>
      <Text style={styles.paragraph}>
        You can transform data by applying functions to columns, creating new features, or encoding categorical variables.
      </Text>
      <Text style={styles.code}>
        {'# Apply a function to a column\n' +
        'df["Column"] = df["Column"].apply(lambda x: x * 2)\n\n' +
        '# Create a new feature\n' +
        'df["New Feature"] = df["Column1"] + df["Column2"]\n\n' +
        '# Encode categorical variables\n' +
        'df = pd.get_dummies(df, columns=["Category"])'}
      </Text>

      <Text style={styles.subheading}>Example: Handling Missing Data</Text>
      <Text style={styles.paragraph}>
        Let's replace missing values in a 'Price' column with the mean value:
      </Text>
      <Text style={styles.code}>
        {'mean_price = df["Price"].mean()\n' +
        'df["Price"].fillna(mean_price, inplace=True)'}
      </Text>

      {/* Add more content and examples for Chapter 9 as needed */}
      <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
      <Button
        title="Next: Chapter 10"
        onPress={() => navigation.navigate('Chapter10')}
      />
    </ScrollView>
  );
};

export default Chapter9;
