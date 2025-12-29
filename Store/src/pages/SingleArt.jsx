import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function SingleArt() {
  const params = useParams();
  const { data, isLoading, isError } = useFetch(
    `https://fakestoreapi.com/products/${params.productId}`
  );

  return (
    <div>
      <h1>{data?.title}</h1>

      <img src={data?.image} className='w-100 border rounded-md' alt='' />
    </div>
  );
}
