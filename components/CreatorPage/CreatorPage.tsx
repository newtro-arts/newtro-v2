import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import AllCreatorsButton from './AllCreatorsButton';
import CreatorDetails from './CreatorDetails';
import Discover from './Discover';

const CreatorPage = () => {
  const { query } = useRouter();
  const address = query.address as string;

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: [`creator-${address}`],
    queryFn: () => fetch(`/api/creator/${address}`).then(res => res.json()),
  });

  return (
    <div className="ibm-text mb-5 pt-24 px-4 pragmatica-text text-fourth-green md:px-9">
      {isLoading ? (
        <p className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          Loading...
        </p>
      ) : (
        isSuccess ? (
          <>
            <CreatorDetails creator={data.creator} />
            <Discover className='mt-5  hidden xl:block' />
          </>
        ) : (
          <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <p className='mb-2'>Creator Not Found.</p>
            <AllCreatorsButton />
          </div>
        )
      )}
    </div>
  );
};

export default CreatorPage;