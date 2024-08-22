import React from 'react';
import FilterItem from '../Commons/FilterItem';
import Carousel from '../Commons/Carousel';
import FeaturedMintsHome from '../FeaturedMintsHome';
import Button from '../Commons/Button';
import useFilterData from '../../hooks/useFilterData';
import { filterList } from '@/sources/filterList';
import FeaturedMintTokenURI from '../FeaturedMintTokenURI';

const FeaturedMintsSection: React.FC = () => {
  const { selectedFilter, setSelectedFilter, filterData } = useFilterData();
  const displayedData = filterData();

  return (
    <div className="max-w-full">
      <div className="flex justify-between">
        <h5 className="mb-4 text-xl lg:text-2xl pragmatica-text uppercase mx-8">
          Featured Mints
        </h5>
        <div className="hidden lg:block">
          <Button href="/drops/all" variant="primary" className="mr-8 text-sm lg:text-base">
            Explorer
          </Button>
        </div>
      </div>
      <Carousel itemsPerView={3}>
        {displayedData.map((mint: any, key: number) => (
          <div key={key}>
            {mint?.tokenURI ? (
              <FeaturedMintTokenURI mint={{ id: key, ...mint }} />
            ) : (
              <FeaturedMintsHome
                id={key}
                name={mint.name}
                image={mint.webAssets.previewAsset.previewImage}
                contract={mint.address}
                token_id={mint.tokenId}
              />
            )}
          </div>
        ))}
      </Carousel>
      <div className="flex px-8 max-w-full overflow-x-auto horizontal-list items-center gap-x-2 justify-start text-base py-4 border-y border-fourth-green">
        <p className="font-semibold mr-2">FILTER:</p>
        <div className="flex overflow-x-auto">
          {filterList.map((title, key) => (
            <FilterItem
              key={key}
              title={title}
              selectedFilter={selectedFilter}
              onSelect={setSelectedFilter}
            />
          ))}
        </div>
      </div>
      <div className="flex lg:hidden w-full px-8">
        <Button href="/drops/all" variant="primary" className="text-center mx-2 my-4 p-3 w-full">
          Explorer
        </Button>
      </div>
    </div>
  );
};

export default FeaturedMintsSection;
