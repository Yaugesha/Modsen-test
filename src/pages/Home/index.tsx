import Slider from '@components/Slider';
import { useGetProductsQuery } from '@services/shopApi';

const Home = () => {
  const { data, isLoading, isError } = useGetProductsQuery(6);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Something went wrong</div>}
      {data && <Slider products={data.slice(0, 5)} />}
    </div>
  );
};

export default Home;
