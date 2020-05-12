import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

// import { Container } from './styles';

const App = () => {
  return (
    <View style={{backgroundColor: '#542FC0'}}>
      <Text>Bezier Line Chart</Text>
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width + 125} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        withVerticalLabels={true}
        withHorizontalLabels={false}
        yLabelsOffset={-50}
        fromZero={true}
        chartConfig={{
          backgroundColor: '#542FC0',
          backgroundGradientFrom: '#542FC0',
          backgroundGradientTo: '#542FC0',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(84, 44, 235, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(84, 44, 235, ${opacity})`,
          style: {
            borderRadius: 16,
            paddingLeft: -100,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#542CEB',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 50,
          marginLeft: -55,
        }}
      />
    </View>
  );
};

export default App;
