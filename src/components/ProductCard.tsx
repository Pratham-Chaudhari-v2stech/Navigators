import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: product.thumbnail }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          {product.title}
        </Text>

        <Text style={styles.description} numberOfLines={2}>
          {product.description}
        </Text>

        <Text style={styles.price}>
          ${product.price}
        </Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 3,
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },

  content: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  description: {
    color: '#666',
    marginVertical: 4,
  },

  price: {
    fontWeight: 'bold',
    color: 'green',
    fontSize: 16,
  },
});