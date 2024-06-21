import { useEffect, useState } from 'react';
import {
  useGetProductQuery,
  useLazyGetCategoryIdSortedProductsQuery,
} from '@services/shopApi';
import { useAppDispatch } from '@utils/hooks/storeHooks';
import { useLocation } from 'react-router-dom';
import { Product } from 'src/types/Product';
import Slider from '@components/Slider';
import { createSlides, fullCost, getProductId } from '@utils/productHelper';
import { MyStack } from '@components/Containers/Stack/styled';
import { MyGroup } from '@components/Containers/Group/styled';
import {
  ProductInfo,
  PhotoContainer,
  Photo,
  MainHeading,
  ProductPrice,
  Highlited,
  Description,
  Categories,
  DescriptionSection,
  SectionHeading,
  SimilarItemsSection,
} from './styled';
import mail from '@assets/images/socials/mail.svg';
import facebook from '@assets/images/socials/facebook.svg';
import instagram from '@assets/images/socials/instagram.svg';
import twitter from '@assets/images/socials/twitter.svg';
import ProductCard from '@components/ProductCard';
import Button from '@components/Button';
import { Slide } from 'src/types/Slider';

const Product = () => {
  const [similarItems, setSimilarItems] = useState<Product[]>();
  const loaction = useLocation();
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch({ type: 'cart/addProduct', payload: data });
  };

  const { data, isLoading, isError } = useGetProductQuery(
    getProductId(loaction.pathname),
  );

  const handleChangeSimilarItems = (items: Product[]) => {
    setSimilarItems(items);
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
            <MyGroup gap={40}>
              <MyStack justify="space-between" width={120} height={600}>
                {createSlides(data, 4).map((photo: Slide) => {
                  return (
                    <PhotoContainer size={120}>
                      <Photo
                        key={photo.id}
                        size={120}
                        src={photo.image}
                        alt={photo.title}
                      />
                    </PhotoContainer>
                  );
                })}
              </MyStack>
              <Slider
                items={createSlides(data, 4)}
                width={540}
                height={600}
                gap={28}
              />
            </MyGroup>
            <MyStack gap={64} width={486}>
              <MyStack gap={24}>
                <MainHeading>{data?.title}</MainHeading>
                <ProductPrice>$ {fullCost(data?.price)}</ProductPrice>
              </MyStack>
              <MyStack justify="space-between" height={452}>
                <Description>{data?.description}</Description>
                <Button name="Add to cart" handleClick={handleAddToCart} />
                <MyStack gap={64}>
                  <MyGroup gap={30}>
                    <img src={mail} alt="mail" />
                    <img src={facebook} alt="facebook" />
                    <img src={instagram} alt="instagram" />
                    <img src={twitter} alt="twitter" />
                  </MyGroup>
                  <Categories>
                    <Highlited>Categories: </Highlited>
                    {data?.category}
                  </Categories>
                </MyStack>
              </MyStack>
            </MyStack>
          </ProductInfo>
          <DescriptionSection>
            <SectionHeading>Description</SectionHeading>
            <Description>{data?.description}</Description>
          </DescriptionSection>
          <SimilarItemsSection>
            <MainHeading>Similar items</MainHeading>
            <MyGroup justify="space-between" wrap={true}>
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
            </MyGroup>
          </SimilarItemsSection>
        </>
      )}
    </>
  );
};

export default Product;
