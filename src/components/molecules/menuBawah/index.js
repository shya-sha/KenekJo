import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';



const BottomNavBar = () => {
  
  const [activeTab, setActiveTab] = useState(0);
  const navigation = useNavigation();

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const getIconSource = (tabIndex) => {
    switch (tabIndex) {
      case 0:
        return require('../../../assets/icons/projects-icon.png');
      case 1:
        return require('../../../assets/icons/chat-icon.png');
      case 2:
        return require('../../../assets/icons/profile-icon.png');
      case 3:
        return require('../../../assets/icons/settings-icon.png');
      default:
        return null;
    }
  };
    
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab} onPress={() => handleTabClick(0)} onPress={() => navigation.navigate('HomeScreen')}> 
        <Image
          source={getIconSource(0)}
          style={[styles.icon, activeTab === 0 && styles.activeIcon]}
        />
        <Text style={[styles.text, activeTab === 0 && styles.activeText]}>
          Projects
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={() => handleTabClick(1)} onPress={() => navigation.navigate('Chat')}>
        <Image
          source={getIconSource(1)}
          style={[styles.icon, activeTab === 1 && styles.activeIcon]}
        />
        <Text style={[styles.text, activeTab === 1 && styles.activeText]}>
          Chat
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={() => handleTabClick(2)} onPress={() => navigation.navigate('Profile')}>
        <Image
          source={getIconSource(2)}
          style={[styles.icon, activeTab === 2 && styles.activeIcon]}
        />
        <Text style={[styles.text, activeTab === 2 && styles.activeText]}>
          Profile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={() => handleTabClick(3)} onPress={() => navigation.navigate('Setting')}>
        <Image
          source={getIconSource(3)}
          style={[styles.icon, activeTab === 3 && styles.activeIcon]}
        />
        <Text style={[styles.text, activeTab === 3 && styles.activeText]}>
          Setting
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    elevation: 8,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 2,
  },
  text: {
    fontSize: 12,
    color: '#999',
  },
});

export default BottomNavBar;