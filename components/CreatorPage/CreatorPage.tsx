import ConnectWalletButton from '@/components/Commons/CustomButton';
import useCreators from '@/hooks/useCreators';
import { useRouter } from 'next/router';
import CreatorDetails from './CreatorDetails';
import Discover from './Discover';
import AllCreatorsButton from './AllCreatorsButton';

const CreatorPage = () => {
  const { query } = useRouter();
  const { address } = query;
  const { isWhitelisted, creators } = useCreators();
  const creator = (creators as Record<string, any>[]).find((creator: any) => creator.address === address);

  return (
    <div className="ibm-text mb-5 pt-24 px-4 pragmatica-text text-fourth-green md:px-9">
      {isWhitelisted ? (
        creator ? (
          <>
            <CreatorDetails creator={creator} />
            <Discover className='mt-5  hidden xl:block' />
          </>
        ) : (
          <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <p className='mb-2'>Creator Not Found.</p>
            <AllCreatorsButton />
          </div>
        )
      ) : (
        <div className="text-white min-w-max absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ConnectWalletButton />
        </div>
      )}
    </div>
  );
};

export default CreatorPage;