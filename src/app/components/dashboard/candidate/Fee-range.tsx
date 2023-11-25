import NiceSelect from "@/ui/nice-select";
import React from "react";

const FeeRangeSelect = () => {
  const handleFeeRange = (item: { value: string; label: string }) => {};
  return (
    <NiceSelect
      options={[
        { value: "", label: "select Fee Range" },
        { value: "3L", label: "1-3Lakhs" },
        { value: "6L", label: "1-6Lakhs" },
        { value: "10L", label: "1-10Lakhs" },
        { value: "Others", label: "Others" },
      ]}
      defaultCurrent={0}
      onChange={(item) => handleFeeRange(item)}
      name="FeeRange"
    />
  );
};

export default FeeRangeSelect;
