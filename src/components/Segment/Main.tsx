/*eslint-disable*/
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
//import screen
import Profile from './One';
import Project from './two';
const Main:React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleSingleIndexSelect = (index: any) => {
    setSelectedIndex(index);
  };
  return (
    <View style={{flex: 1, alignItems: 'center', padding: 8,marginBottom:22}}>
      <SegmentedControlTab
        values={['Profile', 'Api Data']}
        selectedIndex={selectedIndex}
        tabStyle={{
          shadowRadius: 10,
          shadowOpacity: 0.8,
          shadowColor: 'red',
          borderColor: 'skyblue',
          shadowOffset: {height: 3, width: 3},
        }}
        activeTabStyle={{backgroundColor: 'grey'}}
        onTabPress={handleSingleIndexSelect}
      />

      {selectedIndex === 0 && (
        <View style={{margin: 24}}>
          <Profile />
        </View>
      )}
      {selectedIndex === 1 && (
        <View style={{margin: 24}}>
          <Project />
        </View>
      )}
    </View>
  );
};

export default Main;
/*eslint-disable*/