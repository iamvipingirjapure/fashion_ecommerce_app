import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import colors from '../../config/colors';

interface ItemProps {
    icon: any;
    label: string;
    onPress?: () => void;
}

interface IconHorizontalListProps {
    data: ItemProps[];
  }
  
const IconHorizontalList: React.FC<IconHorizontalListProps> = ({data }) => {
    const SingleItem = ({ item }: { item: ItemProps }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={item.onPress}>
          <View style={styles.iconWrapper}>
            {/* <Image source={require('../../../assets/images/SpalshScreenBg.jpg')} style={styles.icon} resizeMode="contain" /> */}
            <View style={styles.icon}></View>
          </View>
          <Text style={styles.label}>{item.label}</Text>
        </TouchableOpacity>
      );
    
      return (
          <View style={styles.listContainer}>
              {data.map((item, index) => (
                  <SingleItem key={index} item={item}/>
              ))}
          </View>
      );
    };
    
    const styles = StyleSheet.create({
      listContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
      },
      itemContainer: {
        alignItems: 'center',
        // marginRight: 15,
      },
      iconWrapper: {
        height:55,
        width:55,
        backgroundColor: 'lightgrey',
        padding: 15,
        borderRadius: 50,
        marginBottom: 6,
        // marginRight:25
      },
      icon: {
        width: 30,
        height: 30,
        // tintColor: '#6B4226',
      },
      label: {
        fontSize: 14,
        fontWeight: '700',
        color:colors.primary
      },
    });

export default IconHorizontalList;
