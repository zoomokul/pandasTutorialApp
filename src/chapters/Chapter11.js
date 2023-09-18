// Chapter11.js
import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { styles } from '../styles/tutorialStyles'; // Import styles
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9981135393846597/5183951093';


const Chapter11 = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Chapter 11: Data Aggregation with Pandas</Text>
      <Text style={styles.paragraph}>
        Data aggregation is a crucial operation in Pandas, allowing you to summarize and analyze data efficiently.
      </Text>

      <Text style={styles.subheading}>Aggregating Functions</Text>
      <Text style={styles.paragraph}>
        You can use various aggregation functions like mean, sum, and groupby to aggregate data.
      </Text>
      <Text style={styles.code}>
        {'# Calculate mean\n' +
        'mean_value = df["column_name"].mean()'}
      </Text>

      <Text style={styles.subheading}>Example 1: Calculating Mean</Text>
      <Text style={styles.paragraph}>
        Let's calculate the mean of a column in a DataFrame:
      </Text>
      <Text style={styles.code}>
        {'# Calculate mean\n' +
        'mean_value = df["Sales"].mean()\n' +
        'print("Mean Sales:", mean_value)'}
      </Text>
      <Text style={styles.result}>
        Output: Mean Sales: 2500.0
      </Text>

      <Text style={styles.subheading}>Example 2: Grouping and Aggregating Data</Text>
      <Text style={styles.paragraph}>
        You can group data by a specific column and calculate aggregate statistics for each group.
      </Text>
      <Text style={styles.code}>
        {'# Group data by department\n' +
        'department_groups = df.groupby("Department")\n\n' +
        '# Calculate mean sales for each department\n' +
        'mean_sales = department_groups["Sales"].mean()\n\n' +
        '# Calculate total sales for each department\n' +
        'total_sales = department_groups["Sales"].sum()'}
      </Text>
      <Text style={styles.result}>
        Output:
        {'\n'}
        Mean Sales by Department:
        {'\n'}
        Department A: 2000.0
        {'\n'}
        Department B: 2800.0
        {'\n'}
        Total Sales by Department:
        {'\n'}
        Department A: 8000.0
        {'\n'}
        Department B: 5600.0
      </Text>

      {/* Add more content and examples for Chapter 11 as needed */}
      <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
      <Button
        title="Next Chapter"
        onPress={() => navigation.navigate('Chapter12')}
      />
    </ScrollView>
  );
};

export default Chapter11;
