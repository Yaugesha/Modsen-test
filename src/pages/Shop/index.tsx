import { useState } from 'react';
import { Product } from '@utils/types';
import Filters from '@components/Filters';
import ProductCard from '@components/ProductCard';
import { Heading, SectionContent, CardsContainer } from './styled';
import { useProductSort } from '@utils/hooks/sortHooks';

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
          setMinValue={setMinValue}
          maxValue={maxValue}
          setMaxValue={setMaxValue}
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
