import { Address } from "viem";
import { ZORA_PROFILE_API } from "../consts";

const bulkFetchProfile = async () => {
  const NEWTRO_CREATORS = JSON.parse(process.env.NEWTRO_CREATORS || "[]");
  const fetchPromises = NEWTRO_CREATORS.map((address: Address) =>
    fetch(`${ZORA_PROFILE_API}${address}`).then((response) => response.json())
  );
  const results = await Promise.all(fetchPromises);
  return results;
};

export default bulkFetchProfile;
