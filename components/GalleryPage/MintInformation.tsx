import React from 'react'

interface MintInformationProps {
    mints: string;
    title: string;
};

const MintInformation = ({ mints, title }: MintInformationProps) => {
  return (
    <div className="w-full flex-col border border-fourth-green rounded-tl-[15px] rounded-br-[15px] p-4">
        <p>Artist</p>
        <div className="flex justify-between gap-y-4">
            <h5 className="pragmatica-text uppercase">{title}</h5>
            <p>{mints}</p>
        </div>
    </div>
  )
}

export default MintInformation