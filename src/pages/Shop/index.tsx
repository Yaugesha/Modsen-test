import Filters from '@components/Filters';
import ProductCard from '@components/ProductCard';
import { Product } from '@customTypes/product';
import { useState } from 'react';
import { useProductSort } from 'src/hooks/useProductSort';

import { CardsContainer, Heading, SectionContent } from './styled';

const Shop = () => {
  const [searchItem, setItem] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('ascending');
  const [shopBy, setShopBy] = useState<string>('');

  const {
    products,
    isLoading,
    isError,
    minValue,
    maxValue,
    setMinValue,
    setMaxValue,
    range,
  } = useProductSort(sortBy, shopBy);

  const handleInputSearch: React.ChangeEventHandler<HTMLInputElement> = e => {
    setItem(e.target.value);
  };

  const handleSelectSortBy = (newValue: string) => {
    setSortBy(newValue);
  };

  const handleSelectShopBy = (newValue: string) => {
    setShopBy(newValue);
  };

  const handleSetMinValue = (newValue: number) => {
    if (newValue > range[0]) setMinValue(newValue);
    else setMinValue(range[0]);
  };

  const handleSetMaxValue = (newValue: number) => {
    if (newValue < range[1]) setMaxValue(newValue);
    else setMaxValue(range[1]);
  };

  const filteredProducts = (products: Product[]): Array<Product> => {
    return products
      ?.filter(product =>
        product.title.toLowerCase().includes(searchItem.toLowerCase()),
      )
      ?.filter(
        product => product.price >= minValue && product.price <= maxValue,
      );
  };

  return (
    <>
      <Heading>Shop the latest</Heading>
      <SectionContent>
        <Filters
          handleInputSearch={handleInputSearch}
          priceRange={range}
          setSortBy={handleSelectSortBy}
          setShopBy={handleSelectShopBy}
          minValue={minValue}
          setMinValue={handleSetMinValue}
          maxValue={maxValue}
          setMaxValue={handleSetMaxValue}
        />
        <>
          {isLoading && <div>Loading...</div>}
          {isError && <div>Something went wrong</div>}
          {filteredProducts(products)?.length ? (
            <CardsContainer>
              {filteredProducts(products).map((product: Product) => {
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
            <div> No products match search filters</div>
          )}
        </>
      </SectionContent>
    </>
  );
};

export default Shop;
