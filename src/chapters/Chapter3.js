// Chapter3.js
import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { styles } from '../styles/tutorialStyles'; // Import styles
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9981135393846597/5183951093';


const Chapter3 = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Chapter 3: Data Loading in Pandas</Text>
      <Text style={styles.paragraph}>
        Before you can analyze data in pandas, you need to load it. Pandas supports various data formats for loading data, including CSV, Excel, SQL databases, and more.
      </Text>

      <Text style={styles.subheading}>Loading data from a CSV file</Text>
      <Text style={styles.paragraph}>
        To load data from a CSV file, you can use the `read_csv` function. For instance:
      </Text>
      <Text style={styles.code}>
        {'import pandas as pd\n' +
        'df = pd.read_csv("data.csv")'}
      </Text>

      <Text style={styles.subheading}>Loading data from an Excel file</Text>
      <Text style={styles.paragraph}>
        You can also load data from an Excel file using `read_excel`:
      </Text>
      <Text style={styles.code}>
        {'import pandas as pd\n' +
        'df = pd.read_excel("data.xlsx")'}
      </Text>

      <Text style={styles.subheading}>Example: Loading Data from a CSV</Text>
      <Text style={styles.paragraph}>
        Let's load a CSV file and examine the data:
      </Text>
      <Text style={styles.code}>
        {'import pandas as pd\n' +
        'df = pd.read_csv("sales_data.csv")\n' +
        'print(df.head())'}
      </Text>

      <Text style={styles.subheading}>Example: Loading Data from an Excel File</Text>
      <Text style={styles.paragraph}>
        Here's how to load data from an Excel file:
      </Text>
      <Text style={styles.code}>
        {'import pandas as pd\n' +
        'df = pd.read_excel("sales_data.xlsx")\n' +
        'print(df.head())'}
      </Text>

      {/* Add more content and examples for Chapter 3 as needed */}
      
      {/* Add space at the end to make the button more accessible */}
      <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />

      <Button
        title="Next: Chapter 4"
        onPress={() => navigation.navigate('Chapter4')}
      />
    </ScrollView>
  );
};

export default Chapter3;
