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
import {s, vs} from 'react-native-size-matters';

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
    return (
      <ActivityIndicator
        style={{marginTop: 50}}
        size="large"
        color={colors.primary}
      />
    );

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
      <Header title="Product Details" showWishlistButton />
      <ScrollView>
        <View style={{position: 'relative'}}>
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
            style={{position: 'absolute', bottom: vs(15), alignSelf: 'center'}}
          />
        </View>
        <View style={{backgroundColor: colors.whiteBackground}}>
          <View
            style={{
              flex: 1,
              backgroundColor: colors.whiteBackground,
              paddingHorizontal: s(10),
              paddingVertical: vs(20),
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: colors.whiteBackground,
              }}>
              <Text style={styles.subtitle}>{product.category}</Text>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
                <FontAwesome name="star" color={colors.secondary} size={22} />
                <Text style={{fontSize: 19, color: colors.grey}}>
                  {product.rating}
                </Text>
              </View>
            </View>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.subHeading}>Product Details</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.subHeading}>Select Size</Text>
            <View
              style={{
                minHeight: vs(40),
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: s(6),
              }}>
              {['S', 'M', 'L', 'XL', 'XXL', 'XXXL'].map(item => {
                return (
                  <TouchableOpacity
                    key={item}
                    style={{
                      height: vs(40),
                      paddingHorizontal: s(15),
                      borderWidth: 1,
                      borderColor: colors.ligtShadow,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 12,
                    }}>
                    <Text
                      style={{
                        fontSize: s(14),
                        fontWeight: '500',
                        color: colors.primary,
                        textAlign: 'center',
                      }}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.subHeading}>Select Color : </Text>
              <Text style={{...styles.subHeading, color: 'brown'}}>
                Select Color
              </Text>
            </View>
            <View
              style={{
                minHeight: vs(40),
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
                gap: s(10),
              }}>
              {['tomato', 'lightgrey', 'lightpink', 'lightblue', 'salmon'].map(
                item => {
                  return (
                    <TouchableOpacity
                      key={item}
                      style={{
                        height: vs(30),
                        width: s(31),
                        backgroundColor: item,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 52,
                      }}>
                      {false && (
                        <View
                          style={{
                            height: vs(14),
                            width: s(14),
                            backgroundColor: colors.whiteBackground,
                            borderRadius: 55,
                          }}
                        />
                      )}
                    </TouchableOpacity>
                  );
                },
              )}
            </View>
          </View>
          <View style={styles.footerContainer}>
            <View>
              <Text style={{color: colors.lightText, fontSize: s(16)}}>
                Total Price
              </Text>
              <Text
                style={{
                  color: colors.primary,
                  fontSize: s(18),
                  fontWeight: '600',
                }}>
                $88.76
              </Text>
            </View>
            <TouchableOpacity
              style={styles.ViewOrderBtn}
              // onPress={() => navigation.navigate(SCREENS.SHIPPING_ADDRESS)}
            >
              <Ionicons
                name="bag"
                size={s(22)}
                color={colors.whiteBackground}
              />
              <Text style={styles.checkoutButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightColorBg,
  },
  header: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButton: {
    padding: 8,
  },
  mainImage: {
    height: vs(300),
    resizeMode: 'stretch',
    marginHorizontal: s(10),
    marginTop: vs(20),
  },
  thumbnailList: {
    gap: s(8),
    alignSelf: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
    padding: s(6),
    zIndex: 99999,
    borderRadius: 12,
    backgroundColor: colors.whiteBackground,
  },
  thumbnailWrapper: {
    borderRadius: 8,
  },
  thumbnail: {
    width: s(50),
    height: vs(50),
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
    fontSize: s(20),
    fontWeight: '600',
    marginTop: vs(1),
    marginBottom: vs(2),
    color: colors.darkText,
  },
  subtitle: {
    fontSize: s(18),
    fontWeight: '600',
    marginVertical: 10,
    color: colors.grey,
  },
  subHeading: {
    fontSize: s(18),
    fontWeight: '600',
    marginVertical: vs(15),
  },
  price: {
    fontSize: 20,
    fontWeight: '500',
    color: '#e67e22',
    marginBottom: 10,
  },
  description: {
    fontSize: s(16),
    color: colors.lightText,
    lineHeight: 25,
    paddingBottom: vs(20),
    borderBottomWidth: 1,
    borderBottomColor: colors.ligtShadow,
  },
  footerContainer: {
    paddingHorizontal: s(12),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    borderWidth: 0.4,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ViewOrderBtn: {
    backgroundColor: colors.primary,
    borderRadius: 55,
    paddingVertical: vs(5),
    paddingHorizontal: s(40),
    marginVertical: vs(10),
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(10),
  },
  checkoutButton: {
    backgroundColor: colors.primary,
    borderRadius: 55,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  checkoutButtonText: {
    color: colors.white,
    fontSize: s(18),
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: vs(6),
  },
});

export default SingleProdcutDetails;
