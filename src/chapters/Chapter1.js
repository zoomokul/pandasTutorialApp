// Chapter1.js
import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { styles } from '../styles/tutorialStyles'; // Import styles
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9981135393846597/5183951093';

const Chapter1 = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
   
      <Text style={styles.heading}>Chapter 1: Introduction to Pandas</Text>
      <Text style={styles.paragraph}>
        Pandas is an open-source Python library that provides powerful data structures and data analysis tools.
        It is widely used for data manipulation, cleaning, and analysis in data science and machine learning projects.
        Let's get started with the basics of pandas.
      </Text>

      <Text style={styles.subheading}>Installation</Text>
      <Text style={styles.paragraph}>
        Before you can use pandas, you need to install it. You can install pandas using pip:
      </Text>
      <Text style={styles.code}>
        {'pip install pandas'}
      </Text>

      <Text style={styles.subheading}>Importing Pandas</Text>
      <Text style={styles.paragraph}>
        To start using pandas, you need to import it in your Python script or Jupyter Notebook:
      </Text>
      <Text style={styles.code}>
        {'import pandas as pd'}
      </Text>

      <Text style={styles.subheading}>Example: Creating a DataFrame</Text>
      <Text style={styles.paragraph}>
        You can create a DataFrame from a Python dictionary. For instance:
      </Text>
      <Text style={styles.code}>
        {'import pandas as pd\n' +
        'data = {\n' +
        "    'Name': ['Alice', 'Bob', 'Charlie'],\n" +
        '    "Age": [25, 30, 35]\n' +
        '}\n' +
        'df = pd.DataFrame(data)\n' +
        'print(df)'}
      </Text>

      {/* Add more content and examples for Chapter 1 as needed */}
      <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
      <Button
        title="Next: Chapter 2"
        onPress={() => navigation.navigate('Chapter2')}
      />
    </ScrollView>
  );
};

export default Chapter1;
