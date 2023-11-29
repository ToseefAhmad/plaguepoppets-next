'use client';

import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/lib/apolloClient";
import { PropsWithChildren } from "react";

/* Ethereum WalletConnect */
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { mainnet, goerli } from 'wagmi/chains'

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID
const alchemy_key = process.env.NEXT_PUBLIC_ALCHEMY_KEY

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [process.env.NEXT_PUBLIC_CHAIN_ID == "5" ? goerli : mainnet],
  [w3mProvider({ projectId }), alchemyProvider({ apiKey: alchemy_key })]
)

const wagmiClient = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
  webSocketPublicClient,
})

const ethereumClient = new EthereumClient(wagmiClient, chains)

export function ClientProviders({ children }: PropsWithChildren) {
  const apolloClient = useApollo();
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <WagmiConfig config={wagmiClient}>
          {children}
        </WagmiConfig>
      </ApolloProvider>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}