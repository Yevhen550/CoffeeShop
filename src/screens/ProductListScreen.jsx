import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { Animated, FlatList, StyleSheet, View } from "react-native";
import AnimatedBadge from "../components/AnimatedBadge/AnimatedBadge";
import CustomButton from "../components/CustomButton/CustomButton";
import ProductCard from "../components/ProductCard/ProductCard";
import Colors from "../constants/Colors";
import { ThemeContext } from "../context/ThemeContext";
import { errorMessageToast } from "../helpers/toastMessages";
import { ROUTES } from "../navigation/routes";
import products from "../store/productsData";

const ProductListScreen = () => {
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);
  const palette = Colors[theme];

  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSelect = (product) => {
    if (selectedProducts.some((p) => p.id === product.id)) {
      setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id));
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const handleBuy = () => {
    if (selectedProducts.length > 0) {
      navigation.navigate(ROUTES.PRODUCT_DETAILS, { selectedProducts });
    } else {
      errorMessageToast();
    }
  };

  const backgroundAnim = new Animated.Value(theme === "light" ? 0 : 1);
  useEffect(() => {
    Animated.timing(backgroundAnim, {
      toValue: theme === "light" ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [theme]);

  const interpolatedBg = backgroundAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [Colors.light.background, Colors.dark.background],
  });

  return (
    <Animated.View
      style={[styles.container, { backgroundColor: interpolatedBg }]}
    >
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            imageUrl={item.imageUrl}
            title={item.title}
            price={item.price}
            onPress={() => handleSelect(item)}
            isSelected={selectedProducts.some((p) => p.id === item.id)}
            theme={theme}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.listContent,
          { backgroundColor: palette.background },
        ]}
      />
      {selectedProducts.length > 0 && (
        <View
          style={[
            styles.buttonContainer,
            { backgroundColor: palette.background },
          ]}
        >
          <CustomButton title="Додати" onPress={handleBuy} theme={theme}>
            <AnimatedBadge count={selectedProducts.length}>
              <FontAwesome
                name="shopping-cart"
                size={24}
                color={palette.white}
              />
            </AnimatedBadge>
          </CustomButton>
        </View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
});

export default ProductListScreen;
