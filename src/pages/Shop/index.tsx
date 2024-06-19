import { useEffect, useState } from 'react';
import { Product } from '@utils/types';
import {
  useGetAllProductsQuery,
  useLazyGetPriceSortedProductsQuery,
  useLazyGetCategorySortedProductsQuery,
} from '@services/shopApi';
import Filters from '@components/Filters';
import ProductCard from '@components/ProductCard';
import { Heading, SectionContent, CardsContainer } from './styled';
import { findPricesrange } from '@utils/filter';

const Shop = () => {
  const [searchItem, setItem] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('ascending');
  const [shopBy, setShopBy] = useState<string>('');
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(1000);
  const [products, setProducts] = useState<Product[]>([]);

  const { data, isLoading, isError } = useGetAllProductsQuery('products\\');

  const [triggerGetPriceSortedProducts, {}] =
    useLazyGetPriceSortedProductsQuery();

  const [triggerGetCategorySortedProducts, {}] =
    useLazyGetCategorySortedProductsQuery();

  const handleInputSearch: React.ChangeEventHandler<HTMLInputElement> = e => {
    setItem(e.target.value);
  };

  const filteredProducts = (): Array<Product> => {
    return products
      .filter(product =>
        product.title.toLowerCase().includes(searchItem.toLowerCase()),
      )
      .filter(
        product => product.price >= minValue && product.price <= maxValue,
      );
  };

  useEffect(() => {
    if (data) {
      const priceRange = findPricesrange(data);
      setMinValue(priceRange[0]);
      setMaxValue(priceRange[1]);
      setProducts(
        data.filter(
          product => product.price >= minValue && product.price <= maxValue,
        ),
      );
    }
  }, [data]);

  useEffect(() => {
    const fetchProducts = async () => {
      const sortedProducts = await triggerGetPriceSortedProducts(sortBy);
      setProducts(sortedProducts.data!);
    };

    if (data) fetchProducts();
  }, [sortBy]);

  useEffect(() => {
    const fetchProducts = async () => {
      const sortedProducts = await triggerGetCategorySortedProducts(shopBy);
      setProducts(sortedProducts.data!);
    };

    if (data) fetchProducts();
  }, [shopBy]);

  return (
    <>
      <Heading>Shop the latest</Heading>
      <SectionContent>
        <Filters
          handleInputSearch={handleInputSearch}
          products={data ?? []}
          priceRange={[0, 1000]}
          setSortBy={setSortBy}
          setShopBy={setShopBy}
          minValue={minValue}
          setMinValue={setMinValue}
          maxValue={maxValue}
          setMaxValue={setMaxValue}
        />
        <>
          {isLoading && <div>Loading...</div>}
          {isError && <div>Something went wrong</div>}
          {filteredProducts() ? (
            <CardsContainer>
              {filteredProducts().map((product: Product) => {
                return (
                  <ProductCard
                    width={300}
                    height={392}
                    product={product}
                    key={product.id}
                  />
                );
              })}
            </CardsContainer>
          ) : (
            <div> No products match search result</div>
          )}
        </>
      </SectionContent>
    </>
  );
};

export default Shop;
