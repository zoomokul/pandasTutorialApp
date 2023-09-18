// Chapter7.js
import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { styles } from '../styles/tutorialStyles'; // Import styles
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9981135393846597/5183951093';


const Chapter7 = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Chapter 7: Data Visualization with Pandas</Text>
      <Text style={styles.paragraph}>
        Data visualization is essential for understanding and communicating insights from your data. Pandas provides tools for basic data visualization.
      </Text>

      <Text style={styles.subheading}>Plotting Data</Text>
      <Text style={styles.paragraph}>
        You can create various types of plots, such as line plots, bar plots, and scatter plots, using pandas. For example, to create a line plot:
      </Text>
      <Text style={styles.code}>
        {'import pandas as pd\n' +
        'import matplotlib.pyplot as plt\n\n' +
        '# Create a DataFrame\n' +
        'data = {\n' +
        "    'Year': [2010, 2011, 2012, 2013, 2014],\n" +
        '    "Revenue": [5000, 6000, 8000, 7500, 9000]\n' +
        '}\n' +
        'df = pd.DataFrame(data)\n\n' +
        '# Create a line plot\n' +
        'df.plot(x="Year", y="Revenue", kind="line")\n' +
        'plt.show()'}
      </Text>

      <Text style={styles.subheading}>Customizing Plots</Text>
      <Text style={styles.paragraph}>
        You can customize plot styles, labels, and titles using matplotlib functions. This allows you to create publication-quality visualizations.
      </Text>
      <Text style={styles.code}>
        {'# Customize plot\n' +
        'plt.title("Yearly Revenue")\n' +
        'plt.xlabel("Year")\n' +
        'plt.ylabel("Revenue (in USD)")\n' +
        'plt.grid(True)'}
      </Text>

      <Text style={styles.subheading}>Example: Bar Plot</Text>
      <Text style={styles.paragraph}>
        Let's create a bar plot to visualize product sales data:
      </Text>
      <Text style={styles.code}>
        {'# Create a bar plot\n' +
        'df_sales.plot(x="Product", y="Sales", kind="bar")\n' +
        'plt.title("Product Sales")\n' +
        'plt.xlabel("Product")\n' +
        'plt.ylabel("Sales")\n' +
        'plt.show()'}
      </Text>

      {/* Add more content and examples for Chapter 7 as needed */}
      <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
      <Button
        title="Next: Chapter 8"
        onPress={() => navigation.navigate('Chapter8')}
      />
    </ScrollView>
  );
};

export default Chapter7;
