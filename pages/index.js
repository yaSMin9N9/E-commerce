import Head from "next/head";
import Product from "../components/Product";
import Link from "next/link";
import Style from './index.module.css'

export const getStaticProps = async () => {
  try {
    const req = await fetch("https://fakestoreapi.com/products");
    const products = await req.json();

    return {
      props: { data: products },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        data: [], // Return an empty array or handle the error as needed.
      },
    };
  }
};

const Home = ({ data }) => {
  <Head>
    <title> home </title>
    <Link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></Link>
  </Head>
  return (
    <div className={Style.card}> 
      {data &&
        data.map((product) => (
          <Product key={product.id} product={product}  />
        ))}
        
    </div>
  );
};

export default Home;
