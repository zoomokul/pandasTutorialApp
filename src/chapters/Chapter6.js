// Chapter6.js
import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { styles } from '../styles/tutorialStyles'; // Import styles
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9981135393846597/5183951093';


const Chapter6 = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Chapter 6: Data Manipulation in Pandas</Text>
      <Text style={styles.paragraph}>
        Data manipulation is a crucial aspect of data analysis. In pandas, you can perform various operations to manipulate and transform your data.
      </Text>

      <Text style={styles.subheading}>Modifying Data</Text>
      <Text style={styles.paragraph}>
        You can modify existing data in a DataFrame. For instance, to update values in a specific column:
      </Text>
      <Text style={styles.code}>
        {'# Update values in a column\n' +
        'df["Column1"] = df["Column1"] * 2'}
      </Text>

      <Text style={styles.subheading}>Aggregation and Grouping</Text>
      <Text style={styles.paragraph}>
        Pandas allows you to perform aggregation and grouping operations on your data. For example, to calculate the mean of a numeric column:
      </Text>
      <Text style={styles.code}>
        {'# Calculate the mean of a column\n' +
        'mean_value = df["NumericColumn"].mean()'}
      </Text>

      <Text style={styles.subheading}>Example: Data Aggregation</Text>
      <Text style={styles.paragraph}>
        Let's calculate the total sales for each product category in a sales DataFrame:
      </Text>
      <Text style={styles.code}>
        {'category_sales = df.groupby("Category")["Sales"].sum()'}
      </Text>

      {/* Add more content and examples for Chapter 6 as needed */}
      <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
      <Button
        title="Next: Chapter 7"
        onPress={() => navigation.navigate('Chapter7')}
      />
    </ScrollView>
  );
};

export default Chapter6;
