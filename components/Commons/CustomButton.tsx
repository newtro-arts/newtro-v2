import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
export default function Button() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    className="border p-2 mr-2 lg:text-fourth-green lg:bg-primary-dark lg:hover:bg-fourth-green lg:hover:text-primary-dark"
                    onClick={openConnectModal}
                    type="button"
                  >
                    Connect{" "}
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    className="py-4"
                    type="button"
                  >
                    Wrong network, change to zora.
                  </button>
                );
              }
              return (
                <div className="flex items-center gap-2 px-4 py-2 lg:px-0 border-gradient-buttons">
                  <button
                    onClick={openChainModal}
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                    className="text-center"
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: "none",
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                        className="flex justify-center items-end"
                      >
                        {chain.iconUrl && (
                          <Image
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            width={20}
                            height={20}
                          />
                        )}
                      </div>
                    )}
                  </button>
                  <button
                    onClick={openAccountModal}
                    className="lg:border py-1 px-2 text-2xl md:text-sm"
                    type="button"
                  >
                    {account.displayName}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
