import Slider from '@components/Slider';
import { useGetProductsQuery } from '@services/shopApi';
import { Product } from '@utils/types';

const Home = () => {
  const { data, isLoading, isError } = useGetProductsQuery(6);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Something went wrong</div>}
      {data && (
        <Slider products={data.slice(0, 5)} />
        // <ul>
        //   {data.slice(0, 5).map((product: Product) => {
        //     return <li key={product.id}>{product.title}</li>;
        //   })}
        // </ul>
      )}
      {data && (
        <ul>
          {data.map((product: Product) => {
            return <li key={product.id}>{product.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Home;
