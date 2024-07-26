import React from "react";
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { darkTheme, getDefaultWallets, midnightTheme, RainbowKitProvider, Theme } from "@rainbow-me/rainbowkit";
import type { AppProps } from "next/app";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { zora, zoraTestnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { infuraProvider } from "@wagmi/core/providers/infura";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.goldsky.com/api/public/project_clhk16b61ay9t49vm6ntn4mkz/subgraphs/zora-create-zora-mainnet/stable/gn",
  cache: new InMemoryCache(),
});

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    zora,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
      ? [zoraTestnet]
      : []),
  ],
  [infuraProvider({ apiKey: process.env.INFURA_KEY! }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "newtro",
  projectId: "ee656e02d549f1ce6f5ab87d3a47c743",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const customTheme = {
  colors: {
    accentColor: '#D1F121',
    accentColorForeground: '#D1F121',
    actionButtonBorder: 'hsl(232 74% 59%)',
    actionButtonBorderMobile: 'hsl(232 74% 59%)',
    actionButtonSecondaryBackground: 'hsl(225, 0%, 0%)',
    closeButton: '#D1F121',
    closeButtonBackground: 'transparent',
    connectButtonBackground: '#D1F121',
    connectButtonBackgroundError: 'hsl(360,100%,64%)',
    connectButtonInnerBackground: 'hsl(235 63% 59%)',
    connectButtonText: '#485DE4',
    connectButtonTextError: 'hsl(0,0%,100%)',
    error: 'hsl(0,0%,100%)',
    generalBorder: '#D1F121',
    generalBorderDim: '#D1F121',
    menuItemBackground: 'hsl(235 63% 59%)',
    modalBackdrop: 'rgba(0, 0, 0, 0.5)',
    modalBackground: 'hsl(232 74% 59%)',
    modalBorder: '#485DE4',
    modalText: '#D1F121',
    modalTextDim: 'rgba(60, 66, 66, 0.3)',
    modalTextSecondary: '#D1F121',
    profileAction: 'hsl(235 63% 59%)',
    profileActionHover: 'hsl(237 53% 59%)',
    profileForeground: 'hsl(232 74% 59%)',
    selectedOptionBorder: 'hsl(69 88% 54%)',
    downloadBottomCardBackground: 'linear-gradient(126deg, rgba(0, 0, 0, 0) 9.49%, rgba(120, 120, 120, 0.1) 71.04%), #050505',
    downloadTopCardBackground: 'linear-gradient(126deg, rgba(120, 120, 120, 0.1) 9.49%, rgba(0, 0, 0, 0) 71.04%), #050505',
    connectionIndicator: 'hsl(107, 100%, 44%)',
    standby: 'hsl(47, 100%, 63%)',
  },
  radii: {
    actionButton: '0px',
    connectButton: '0px',
    menuButton: '0px',
    modal: '0px',
    modalMobile: '0px',
  },
  shadows: {
    connectButton: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    dialog: '0px 8px 32px rgba(0, 0, 0, 0.32)',
    profileDetailsAction: '0px 2px 6px rgba(37, 41, 46, 0.04)',
    selectedOption: '0px 2px 6px rgba(0, 0, 0, 0.24)',
    selectedWallet: '0px 2px 6px rgba(0, 0, 0, 0.12)',
    walletLogo: '0px 2px 16px rgba(0, 0, 0, 0.16)',
  },
  blurs: {
    modalOverlay: 'blur(4px)', // e.g. 'blur(4px)'
  },
  fonts: {
    body: '', // default
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider theme={customTheme} modalSize="compact" chains={chains}>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
