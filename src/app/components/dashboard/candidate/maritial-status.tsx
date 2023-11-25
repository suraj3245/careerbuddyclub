import NiceSelect from "@/ui/nice-select";
import React from "react";

const MaritialSelect = () => {
  const handleCountry = (item: { value: string; label: string }) => {};
  return (
    <NiceSelect
      options={[
        { value: "", label: "select Status" },
        { value: "Single", label: "Single" },
        { value: "Married", label: "Married" },
        { value: "Divorced", label: "Divorced" },
      ]}
      defaultCurrent={0}
      onChange={(item) => handleCountry(item)}
      name="Country"
    />
  );
};

export default MaritialSelect;
