import Filters from '@components/Filters';
import ProductCard from '@components/ProductCard';
import { Product } from '@customTypes/Product';
import { useProductSort } from '@utils/hooks/sortHooks';
import { useState } from 'react';

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
    setMinValue(newValue);
  };

  const handleSetMaxValue = (newValue: number) => {
    setMaxValue(newValue);
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
          priceRange={[0, 1000]}
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
