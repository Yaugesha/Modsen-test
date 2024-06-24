import ProductCard from '@components/ProductCard';
import Slider from '@components/Slider';
import { useGetProductsQuery } from '@services/shopApi';
import { Product } from 'src/types/Product';
import { Link } from 'react-router-dom';
import {
  ProductSection,
  SectionContent,
  SectionHeader,
  SectionHeading,
  ShopLink,
  SliderSection,
} from './styled';
import { useAppSelector } from '@utils/hooks/storeHooks';

const Home = () => {
  const { data, isLoading, isError } = useGetProductsQuery(6);

  const cart = useAppSelector(state => state.cart);

  console.log(cart);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Something went wrong</div>}
      {data && (
        <SliderSection>
          <Slider items={data.slice(0, 5)} width={1248} height={640} gap={64} />
        </SliderSection>
      )}
      <ProductSection>
        <SectionHeader>
          <SectionHeading>Shop the latest</SectionHeading>
          <Link to="/shop">
            <ShopLink>View all</ShopLink>
          </Link>
        </SectionHeader>
        <div>
          {data && (
            <SectionContent>
              {data.map((product: Product) => {
                return (
                  <ProductCard
                    width={380}
                    height={472}
                    product={product}
                    key={product.id}
                  />
                );
              })}
            </SectionContent>
          )}
        </div>
      </ProductSection>
    </div>
  );
};

export default Home;
