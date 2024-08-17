import useCreators from "@/hooks/useCreators";
import React from "react";
import Avatar from "./Avatar";

const CreatorsPage = () => {
  const { creators } = useCreators();

  return (
    <div className="text-white">
      <h1>Creators</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {creators.map((creator: any) => (
          <Avatar key={creator.address} creator={creator} />
        ))}
      </div>
    </div>
  );
};

export default CreatorsPage;
