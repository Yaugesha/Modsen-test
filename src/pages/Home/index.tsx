import ProductCard from '@components/ProductCard';
import Slider from '@components/Slider';
import { useGetProductsQuery } from '@services/shopApi';
import { Product } from '@utils/types';
import { Link } from 'react-router-dom';
import {
  ProductSection,
  SectionContent,
  SectionHeader,
  SectionHeading,
} from './styled';

const Home = () => {
  const { data, isLoading, isError } = useGetProductsQuery(6);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Something went wrong</div>}
      {data && <Slider items={data.slice(0, 5)} />}
      <ProductSection>
        <SectionHeader>
          <SectionHeading>Shop the latest</SectionHeading>
          <Link to="/">View all</Link>
        </SectionHeader>
        <div>
          {data && (
            <SectionContent>
              {data.map((product: Product) => {
                return <ProductCard product={product} key={product.id} />;
              })}
            </SectionContent>
          )}
        </div>
      </ProductSection>
    </div>
  );
};

export default Home;
