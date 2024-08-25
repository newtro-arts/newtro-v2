import React from "react";

interface ZoraInformationProps {
  mounted: boolean;
  isConnected: boolean;
  isMinted: boolean;
  mintData: { hash?: string } | undefined;
}

const ZoraInformation: React.FC<ZoraInformationProps> = ({
  mounted,
  isConnected,
  isMinted,
  mintData,
}) => (
  <>
    {mounted && isMinted ? (
      <p className="text-[14px] pt-2 font-light">
        Your transaction has been submitted. Check on
        <a
          href={`https://explorer.zora.energy/tx/${mintData?.hash}`}
          className="text-blue-600 underline underline-offset-1"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Zora Explorer.
        </a>
      </p>
    ) : null}
  </>
);

export default ZoraInformation;
