import React from "react";

interface FilterItemProps {
  title: string;
  selectedFilter: string;
  onSelect: (title: string) => void;
}

const FilterItem: React.FC<FilterItemProps> = ({
  title,
  selectedFilter,
  onSelect,
}) => {
  return (
    <p
      onClick={() => onSelect(title.toLowerCase())}
      className={`whitespace-nowrap lg:mx-8 cursor-pointer hover-underline-animation hover-underlined-filter ${
        selectedFilter.toLowerCase() === title.toLowerCase() ? "font-bold" : ""
      }`}
    >
      {title}
    </p>
  );
};

export default FilterItem;
