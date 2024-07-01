import facebook from '@assets/images/socials/facebook.svg';
import instagram from '@assets/images/socials/instagram.svg';
import mail from '@assets/images/socials/mail.svg';
import twitter from '@assets/images/socials/twitter.svg';
import Button from '@components/Button';
import Group from '@components/Containers/Group/index';
import Stack from '@components/Containers/Stack/index';
import ItemCounter from '@components/ItemCounter';
import ProductCard from '@components/ProductCard';
import Slider from '@components/Slider';
import { CartItem } from '@customTypes/cart';
import { Product } from '@customTypes/product';
import { Slide } from '@customTypes/slider';
import { useAppDispatch } from '@hooks/store/useAppDispatch';
import { useAppSelector } from '@hooks/store/useAppSelector';
import {
  useGetProductQuery,
  useLazyGetCategoryIdSortedProductsQuery,
} from '@services/shopApi';
import { createSlides, fullCost, getProductId } from '@utils/productHelper';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import {
  Categories,
  Description,
  DescriptionSection,
  Highlited,
  MainHeading,
  Photo,
  PhotoContainer,
  ProductInfo,
  ProductPrice,
  SectionHeading,
  SimilarItemsSection,
} from './styled';

const Product = () => {
  const [similarItems, setSimilarItems] = useState<Product[]>();
  const loaction = useLocation();
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.cart);

  const handleAddToCart = () => {
    dispatch({ type: 'cart/addProduct', payload: data });
  };

  const { data, isLoading, isError } = useGetProductQuery(
    getProductId(loaction.pathname),
  );

  const handleChangeSimilarItems = (items: Product[]) => {
    setSimilarItems(items);
  };

  const isItemInCart = (product: Product) => {
    return !!cart.products.find(
      (cartItem: CartItem) => cartItem.product.id == product.id,
    );
  };

  const getItemCount = (product: Product) => {
    return cart.products.find(
      (cartItem: CartItem) => cartItem.product.id == product.id,
    )!.count;
  };

  const [fetchSimilarProducts, {}] = useLazyGetCategoryIdSortedProductsQuery();

  useEffect(() => {
    const fetchProducts = async () => {
      const similarItems = await fetchSimilarProducts({
        category: data!.category,
        sort: '',
      });
      handleChangeSimilarItems(similarItems.data!);
    };

    if (data) fetchProducts();
  }, [data]);

  return (
    <>
      {isLoading && <div>Loading... </div>}
      {isError && <div>Error </div>}
      {data && (
        <>
          <ProductInfo>
            <Group gap={40}>
              <Stack justify="space-between" width={120} height={600}>
                {createSlides(data, 4).map((photo: Slide) => {
                  return (
                    <PhotoContainer size={120} key={photo.id}>
                      <Photo size={120} src={photo.image} alt={photo.title} />
                    </PhotoContainer>
                  );
                })}
              </Stack>
              <Slider
                items={createSlides(data, 4)}
                width={540}
                height={600}
                gap={28}
              />
            </Group>
            <Stack gap={64} width={486}>
              <Stack gap={24}>
                <MainHeading>{data?.title}</MainHeading>
                <ProductPrice>$ {fullCost(data?.price)}</ProductPrice>
              </Stack>
              <Stack justify="space-between" height={452}>
                <Description>{data?.description}</Description>
                <Group gap={16} align="center">
                  <Button
                    disabled={isItemInCart(data)}
                    name={isItemInCart(data) ? 'In cart' : 'Add to cart'}
                    handleClick={handleAddToCart}
                    size="m"
                  />
                  <>
                    {isItemInCart(data) && (
                      <ItemCounter
                        count={getItemCount(data)}
                        handleDecriment={() => {}}
                        handleIncriment={() => {}}
                      />
                    )}
                  </>
                </Group>
                <Stack gap={64}>
                  <Group gap={30}>
                    <img src={mail} alt="mail" />
                    <img src={facebook} alt="facebook" />
                    <img src={instagram} alt="instagram" />
                    <img src={twitter} alt="twitter" />
                  </Group>
                  <Categories>
                    <Highlited>Categories: </Highlited>
                    {data?.category}
                  </Categories>
                </Stack>
              </Stack>
            </Stack>
          </ProductInfo>
          <DescriptionSection>
            <SectionHeading>Description</SectionHeading>
            <Description>{data?.description}</Description>
          </DescriptionSection>
          <SimilarItemsSection>
            <MainHeading>Similar items</MainHeading>
            <Group justify="space-between" wrap={true}>
              {similarItems &&
                similarItems
                  .filter((product: Product) => product.id !== data.id)
                  .slice(0, 3)
                  .map((product: Product) => {
                    return (
                      <ProductCard
                        product={product}
                        key={product.id}
                        width={380}
                        height={472}
                      />
                    );
                  })}
            </Group>
          </SimilarItemsSection>
        </>
      )}
    </>
  );
};

export default Product;
