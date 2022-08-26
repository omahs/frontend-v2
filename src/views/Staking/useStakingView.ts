import { useParams } from "react-router";
import { TokenInfo, tokenList } from "utils";

type StakingPathParams = {
  poolId: string;
};

const backupPool: TokenInfo = {
  name: "Unsupported",
  symbol: "unsupported",
  decimals: 18,
  logoURI: tokenList[0].logoURI,
};

export const useStakingView = () => {
  const { poolId } = useParams<StakingPathParams>();
  const resolvedPool = resolvePool(poolId);
  const shouldRedirect = resolvedPool === undefined;
  const pool = resolvedPool ?? backupPool;
  return {
    poolId,
    isPoolValid: !shouldRedirect,
    exitLinkURI: "/rewards",
    poolLogoURI: pool.logoURI,
    poolName: pool.symbol.toUpperCase(),
    amountOfRewardsClaimable: 320.13,
  };
};

/**
 * Resolves the pool from a whitelist of pools
 * @param poolId The poolId provided in the path parameter
 * @returns A valid pool with identifying information or undefined
 */
function resolvePool(poolId: string): TokenInfo | undefined {
  // Filter through all the tokens. Assuming that the symbols
  // are unique, this will either filter to an empty array or
  // an array with one element. The [0] will return either the
  // corresponding TokenInfo instance or undefined.
  return tokenList.filter(
    ({ symbol }) => symbol.toLowerCase() === poolId.toLowerCase()
  )[0];
}
