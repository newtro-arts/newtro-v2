import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import DiscoverToken from "./DiscoverToken";
import { isAddress } from "viem";

const Discover = ({ className = '' }) => {
  const router = useRouter();
  const creatorAddress = router.query.address as string;

  const { data: allTokens, isSuccess, isLoading } = useQuery<{ tokens: any[] }>({
    queryKey: ["allTokens", creatorAddress],
    queryFn: () => fetch(`/api/tokens?creatorAddress=${creatorAddress}`).then((res) => res.json()),
    enabled: isAddress(creatorAddress)
  });

  if (isLoading || !isSuccess || allTokens.tokens.length == 0) return;

  return (
    <div className={className}>
      <h1 className="mb-8 pragmatica-text uppercase font-light text-3xl/8 md:text-5xl/10">Discover</h1>
      <div className='grid grid-cols-[repeat(auto-fit,min(100%,300px))] auto-rows-[1fr] gap-5'>
        {allTokens.tokens.map((mint, i) => (
          <DiscoverToken token={{ ...mint }} key={`discover-${i}`} />
        ))}
      </div>
    </div>
  )
};

export default Discover;