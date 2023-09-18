// Chapter8.js
import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { styles } from '../styles/tutorialStyles'; // Import styles
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9981135393846597/5183951093';


const Chapter8 = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Chapter 8: Data Analysis with Pandas</Text>
      <Text style={styles.paragraph}>
        Pandas is a powerful tool for data analysis. In this chapter, we'll explore various data analysis techniques you can perform with pandas.
      </Text>

      <Text style={styles.subheading}>Descriptive Statistics</Text>
      <Text style={styles.paragraph}>
        Pandas provides functions to compute descriptive statistics like mean, median, standard deviation, and more. For example, to calculate the mean:
      </Text>
      <Text style={styles.code}>
        {'# Calculate mean\n' +
        'mean_value = df["Column"].mean()'}
      </Text>

      <Text style={styles.subheading}>Data Aggregation</Text>
      <Text style={styles.paragraph}>
        You can perform data aggregation operations like sum, count, and groupby to gain insights into your data.
      </Text>
      <Text style={styles.code}>
        {'# Aggregate data\n' +
        'total_sales = df["Sales"].sum()\n' +
        'average_sales = df["Sales"].mean()'}
      </Text>

      <Text style={styles.subheading}>Example: Grouping and Aggregating Data</Text>
      <Text style={styles.paragraph}>
        Let's group data by 'Category' and calculate total sales in each category:
      </Text>
      <Text style={styles.code}>
        {'category_sales = df.groupby("Category")["Sales"].sum()'}
      </Text>

      {/* Add more content and examples for Chapter 8 as needed */}
      <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
      <Button
        title="Next: Chapter 9"
        onPress={() => navigation.navigate('Chapter9')}
      />
    </ScrollView>
  );
};

export default Chapter8;
