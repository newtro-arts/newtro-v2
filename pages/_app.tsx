import React from "react";
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import type { AppProps } from "next/app";
import { WagmiProvider } from "wagmi";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http } from "viem";
import { theme } from "@/lib/theme";
import { CHAIN, CHAIN_ID } from "@/lib/consts";
import { Analytics } from "@vercel/analytics/react";

const client = new ApolloClient({
  uri: "https://api.goldsky.com/api/public/project_clhk16b61ay9t49vm6ntn4mkz/subgraphs/zora-create-zora-mainnet/stable/gn",
  cache: new InMemoryCache(),
});

const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: "newtro",
  projectId: "ee656e02d549f1ce6f5ab87d3a47c743",
  chains: [CHAIN],
  transports: {
    [CHAIN_ID]: http(),
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={theme} modalSize="compact">
          <ApolloProvider client={client}>
            <Component {...pageProps} />
            <Analytics />
          </ApolloProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;
