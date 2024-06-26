import { Chain, ChainExplorer } from "@thirdweb-dev/chains";

export const createBlockLink = ({
  chain,
  block,
}: {
  chain: Chain;
  block: number;
}) => `/block/${chain.slug}/${block}`;

export const createTransactionLink = ({
  chain,
  hash,
}: {
  chain: Chain;
  hash: string;
}) => `/tx/${chain.slug}/${hash}`;

export const createChainLink = ({ chain }: { chain: Chain }) =>
  `/chains/${chain.slug}`;

export const createAddressLink = ({
  chain,
  address,
}: {
  chain: Chain;
  address: string;
}) => `/address/${chain.slug}/${address}`;

export type ExplorerLinkType = "tx" | "address" | "block";

export const createExplorerUrl = ({
  explorer,
  type,
  location,
}: {
  explorer: ChainExplorer;
  type?: string;
  location?: string | number;
}) => (type && location ? `${explorer.url}/${type}/${location}` : explorer.url);
