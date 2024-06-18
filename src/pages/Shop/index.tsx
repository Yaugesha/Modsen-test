import { useState } from 'react';
import { Product } from '@utils/types';
import { useGetAllProductsQuery } from '@services/shopApi';
import Filters from '@components/Filters';
import ProductCard from '@components/ProductCard';
import { Heading, SectionContent, CardsContainer } from './styled';

const Shop = () => {
  const [searchItem, setItem] = useState<string>('');
  const { data, isLoading, isError } = useGetAllProductsQuery('products\\');

  const handleInputSearch: React.ChangeEventHandler<HTMLInputElement> = e => {
    setItem(e.target.value);
  };

  return (
    <>
      <Heading>Shop the latest</Heading>
      <SectionContent>
        <Filters handleInputSearch={handleInputSearch} />
        <>
          {isLoading && <div>Loading...</div>}
          {isError && <div>Something went wrong</div>}
          {data && (
            <CardsContainer>
              {data.map((product: Product) => {
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
