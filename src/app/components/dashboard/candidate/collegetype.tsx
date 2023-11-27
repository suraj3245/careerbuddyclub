import NiceSelect from "@/ui/nice-select";
import React from "react";

const CollegeTypeSelect = () => {
  const handleCollegeType = (item: { value: string; label: string }) => {};
  return (
    <NiceSelect
      options={[
        { value: "", label: "Select College Type" },
        { value: "Private", label: "Private" },
        { value: "Central", label: "Central" },
        { value: "State", label: "State" },
        { value: "Semi-Government", label: "Semi-Government" },
        { value: "Others", label: "Others" },
      ]}
      defaultCurrent={0}
      onChange={(item) => handleCollegeType(item)}
      name="CollegeType"
    />
  );
};
export default CollegeTypeSelect;
