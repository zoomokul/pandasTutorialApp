// Chapter10.js
import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { styles } from '../styles/tutorialStyles'; // Import styles
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9981135393846597/5183951093';


const Chapter10 = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Chapter 10: Data Export and Saving with Pandas</Text>
      <Text style={styles.paragraph}>
        After analyzing and preprocessing your data in pandas, you may want to save it for future use or share it with others. Pandas provides various methods to export and save your data.
      </Text>

      <Text style={styles.subheading}>Saving to CSV</Text>
      <Text style={styles.paragraph}>
        You can save a DataFrame to a CSV file using the `to_csv()` method.
      </Text>
      <Text style={styles.code}>
        {'# Save DataFrame to CSV\n' +
        'df.to_csv("output.csv", index=False)'}
      </Text>

      <Text style={styles.subheading}>Saving to Excel</Text>
      <Text style={styles.paragraph}>
        To save a DataFrame to an Excel file, you can use the `to_excel()` method.
      </Text>
      <Text style={styles.code}>
        {'# Save DataFrame to Excel\n' +
        'df.to_excel("output.xlsx", index=False)'}
      </Text>

      <Text style={styles.subheading}>Example: Exporting Data to CSV</Text>
      <Text style={styles.paragraph}>
        Let's export a cleaned DataFrame to a CSV file for further analysis:
      </Text>
      <Text style={styles.code}>
        {'# Cleaned DataFrame\n' +
        'cleaned_df = ...\n\n' +
        '# Export to CSV\n' +
        'cleaned_df.to_csv("cleaned_data.csv", index=False)'}
      </Text>

      {/* Add more content and examples for Chapter 10 as needed */}
      <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
    <Button
        title="Next: Chapter 11"
        onPress={() => navigation.navigate('Chapter11')}
      />
    </ScrollView>
  );
};

export default Chapter10;
