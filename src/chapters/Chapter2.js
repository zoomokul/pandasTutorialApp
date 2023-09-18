// Chapter2.js
import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet, ViewStyle } from 'react-native';
import { styles } from '../styles/tutorialStyles'; // Import styles
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9981135393846597/5183951093';


const Chapter2 = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Chapter 2: Data Structures in Pandas</Text>
      <Text style={styles.paragraph}>
        Pandas provides two primary data structures: Series and DataFrame.
        These data structures are fundamental for data manipulation and analysis.
      </Text>

      <Text style={styles.subheading}>Series</Text>
      <Text style={styles.paragraph}>
        A Series is a one-dimensional array-like object that can hold various data types. It's often used to represent a single column or row of data.
      </Text>

      <Text style={styles.subheading}>DataFrame</Text>
      <Text style={styles.paragraph}>
        A DataFrame is a two-dimensional table with rows and columns, similar to a spreadsheet. It's the primary data structure for most data analysis tasks.
      </Text>

      <Text style={styles.subheading}>Example: Creating a Series and a DataFrame</Text>
      <Text style={styles.paragraph}>
        You can create a Series and a DataFrame as follows:
      </Text>
      <Text style={styles.code}>
        {'import pandas as pd\n' +
        'data = {\n' +
        "    'Name': ['Alice', 'Bob', 'Charlie'],\n" +
        '    "Age": [25, 30, 35]\n' +
        '}\n' +
        'df = pd.DataFrame(data)\n' +
        'series = df["Name"]\n' +
        'print(series)\n' +
        'print(df)'}
      </Text>

      <Text style={styles.subheading}>Example: Accessing DataFrame Elements</Text>
      <Text style={styles.paragraph}>
        You can access specific elements in a DataFrame using various methods, such as `.loc[]` and `.iloc[]`.
      </Text>
      <Text style={styles.code}>
        {'# Access a specific cell by label\n' +
        'cell_value = df.loc[0, "Name"]\n' +
        '\n' +
        '# Access a specific cell by position\n' +
        'cell_value = df.iloc[0, 0]'}
      </Text>

      {/* Add more content and examples for Chapter 2 as needed */}
      
      {/* Add space at the end to make the button more accessible */}
      <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />

      <Button
        title="Next: Chapter 3"
        onPress={() => navigation.navigate('Chapter3')}
      />
    </ScrollView>
  );
};

const extraStyles = StyleSheet.create({
  space: {
    height: 100, // Adjust the height as needed
  },
});

export default Chapter2;
