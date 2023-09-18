// Chapter12.js
import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { styles } from '../styles/tutorialStyles'; // Import styles
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9981135393846597/5183951093';


const Chapter12 = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Chapter 12: Advanced Data Visualization with Pandas</Text>
      <Text style={styles.paragraph}>
        Data visualization is an essential aspect of data analysis. Pandas offers advanced tools to create insightful plots and charts.
      </Text>

      <Text style={styles.subheading}>Creating Scatter Plots</Text>
      <Text style={styles.paragraph}>
        Scatter plots are excellent for visualizing relationships between two numerical variables.
      </Text>
      <Text style={styles.code}>
        {'# Create a scatter plot\n' +
        'df.plot(x="X", y="Y", kind="scatter", title="Scatter Plot")'}
      </Text>

      <Text style={styles.subheading}>Creating Box Plots</Text>
      <Text style={styles.paragraph}>
        Box plots help you understand the distribution and spread of data.
      </Text>
      <Text style={styles.code}>
        {'# Create a box plot\n' +
        'df.boxplot(column="Value", by="Category", grid=False)'}
      </Text>

      <Text style={styles.subheading}>Example: Creating a Heatmap</Text>
      <Text style={styles.paragraph}>
        Let's create a heatmap to visualize the correlation between variables in a dataset:
      </Text>
      <Text style={styles.code}>
        {'# Create a heatmap\n' +
        'import seaborn as sns\n' +
        'corr_matrix = df.corr()\n' +
        'sns.heatmap(corr_matrix, annot=True, cmap="coolwarm", fmt=".2f")'}
      </Text>

      {/* Add more content and examples for Chapter 12 as needed */}
      <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
      <Button
        title="Next Chapter"
        onPress={() => navigation.navigate('Chapter1')}
      />
    </ScrollView>
  );
};

export default Chapter12;
