import { useConnection } from "state/hooks";
import useWindowSize from "hooks/useWindowsSize";
import { BREAKPOINTS } from "utils";

import { useTxClient } from "./useTxClient";
import { usePagination } from "./usePagination";

export function useMyTransactionsView() {
  const { initialLoading, filledTransferTuples, pendingTransferTuples } =
    useTxClient();
  const { isConnected, account, connect } = useConnection();

  const { width = 0 } = useWindowSize();
  const isMobile = width < BREAKPOINTS.laptopMin;

  const filledTransfersPagination = usePagination(filledTransferTuples.length);

  return {
    connectWallet: connect,
    account,
    initialLoading,
    pendingTransferTuples,
    filledTransferTuples,
    isConnected,
    isMobile,
    filledTransfersPagination,
  };
}
