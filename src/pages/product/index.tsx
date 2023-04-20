import { GetStaticProps, NextPage } from 'next';
import ProductsGrid from '../../components/products/ProductsGrid';
import  {Iproduct}  from '../../interfaces/product';
import { sanityClient } from '../../utils/sanity/client';

type Props = {
  products: Iproduct[];
};

const Products: NextPage<Props> = ({ products }) => {
  return <ProductsGrid {...{ products }} />;
};

export default Products;

export const getStaticProps: GetStaticProps = async () => {
  const products = await sanityClient.fetch(
    '*[_type == "product" && !(_id in path("drafts.**"))]'
  );

  return {
    props: { products },
  };
};
