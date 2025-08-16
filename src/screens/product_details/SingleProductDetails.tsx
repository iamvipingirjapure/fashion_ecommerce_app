import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/common/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../config/colors';

const {width} = Dimensions.get('window');

const MOCK_DATA = {
  id: 'prd_001',
  name: 'Classic Camel Coat',
  description:
    'A timeless camel coat made from premium wool. Perfect for layering over both casual and formal outfits.',
  price: 129.99,
  currency: 'USD',
  in_stock: true,
  brand: 'Urban Vogue',
  category: 'Coats',
  rating: 4.6,
  reviews_count: 128,
  main_image: 'https://picsum.photos/id/237/200/300',
  images: [
    'https://picsum.photos/id/1/200/300',
    'https://picsum.photos/id/3/200/300',
    'https://picsum.photos/id/4/200/300',
    'https://picsum.photos/id/5/200/300',
    'https://picsum.photos/id/237/200/300',
  ],
  is_favorite: false,
};

const SingleProdcutDetails = () => {
  const [product, setProduct] = useState<any>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [mainImage, setMainImage] = useState<string | null>(null);

  useEffect(() => {
    setProduct(MOCK_DATA);
    setIsFavorite(MOCK_DATA.is_favorite);
  }, []);

  if (!product)
    return <ActivityIndicator style={{marginTop: 50}} size="large" />;

  const imagesToShow = product.images.slice(0, 5);
  const remainingCount = product.images.length - imagesToShow.length;

  const renderThumbnail = ({item, index}: any) => {
    const isLast = index === imagesToShow.length - 1 && remainingCount > 0;
    return (
      <TouchableOpacity
        style={styles.thumbnailWrapper}
        onPress={() => setMainImage(item)}>
        <Image source={{uri: item}} style={styles.thumbnail} />
        {/* {isLast && (
          <View style={styles.overlay}>
            <Text style={styles.overlayText}>{`+${remainingCount}`}</Text>
          </View>
        )} */}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Product Details" showNotification />
      <View style={{}}>
        <Image
          source={{uri: mainImage ?? product.main_image}}
          style={styles.mainImage}
        />
        <FlatList
          data={imagesToShow}
          renderItem={renderThumbnail}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.thumbnailList}
          keyExtractor={(_, idx) => idx.toString()}
        />
      </View>

      <ScrollView contentContainerStyle={styles.details}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={styles.subtitle}>{product.category}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
            <FontAwesome name="star" color={colors.secondary} size={22} />
            <Text style={{fontSize: 19, color: colors.grey}}>
              {product.rating}
            </Text>
          </View>
        </View>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>
          {product.currency} ${product.price.toFixed(2)}
        </Text>
        <Text style={styles.description}>{product.description}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'salmon',
  },
  header: {
    marginTop: 40,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  iconButton: {
    padding: 8,
  },
  mainImage: {
    width: width,
    height: width,
    resizeMode: 'contain',
  },
  thumbnailList: {
    gap: 12,
    alignSelf: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
    borderWidth: 1,
    padding: 12,
  },
  thumbnailWrapper: {
    borderWidth: 1,
    borderRadius: 8,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 8,
    resizeMode: 'stretch',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  details: {
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 5,
    marginBottom:15
  },
    subtitle: {
    fontSize: 22,
    fontWeight: '600',
    marginVertical: 10,
    color:colors.grey
  },
  price: {
    fontSize: 20,
    fontWeight: '500',
    color: '#e67e22',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
});

export default SingleProdcutDetails;
