import { Wrapper } from "./Staking.styles";
import { StakingReward, StakingForm, StakingExitAction } from "./components";
import { useStakingView } from "./useStakingView";

const Staking = () => {
  const {
    amountOfRewardsClaimable,
    poolName,
    exitLinkURI,
    poolLogoURI,
    isPoolValid,
  } = useStakingView();
  return isPoolValid ? (
    <Wrapper>
      <StakingExitAction
        poolName={poolName}
        exitLinkURI={exitLinkURI}
        poolLogoURI={poolLogoURI}
      />
      <StakingForm />
      <StakingReward maximumClaimableAmount={amountOfRewardsClaimable} />
    </Wrapper>
  ) : (
    <div>404</div>
  );
};

export default Staking;
