import ProductCard from '../components/home/ProductCard';
import useFetch from '../hooks/useFetch';

export default function Home() {
  const { data, isLoading, isError } = useFetch(
    'https://collectionapi.metmuseum.org/public/collection/v1/objects/190001'
  );
  return (
    <div className='grid grid-cols-4 justify-center'>
      {isLoading && <h1>LOADING...</h1>}
      {isError && <h1>error while getting data</h1>}
      {data?.map((item) => (
        <ProductCard key={item.id} image={item.image} title={item.title} />
      ))}
    </div>
  );
}
