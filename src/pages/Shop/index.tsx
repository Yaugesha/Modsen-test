import { useEffect, useState } from 'react';
import { Product } from '@utils/types';
import { useGetAllProductsQuery } from '@services/shopApi';
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

  const handleInputSearch: React.ChangeEventHandler<HTMLInputElement> = e => {
    setItem(e.target.value);
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
    if (data) {
      setProducts(
        data.filter(
          product => product.price >= minValue && product.price <= maxValue,
        ),
      );
    }
  }, [minValue, maxValue]);

  return (
    <>
      <Heading>Shop the latest</Heading>
      <SectionContent>
        <Filters
          handleInputSearch={handleInputSearch}
          products={data ?? []}
          priceRange={[0, 1000]}
          sortBy={sortBy}
          setSortBy={setSortBy}
          shopBy={shopBy}
          setShopBy={setShopBy}
          minValue={minValue}
          setMinValue={setMinValue}
          maxValue={maxValue}
          setMaxValue={setMaxValue}
        />
        <>
          {isLoading && <div>Loading...</div>}
          {isError && <div>Something went wrong</div>}
          {data && (
            <CardsContainer>
              {products.map((product: Product) => {
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
          )}
        </>
      </SectionContent>
    </>
  );
};

export default Shop;
