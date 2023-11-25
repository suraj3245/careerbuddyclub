import NiceSelect from "@/ui/nice-select";
import React from "react";

const GenderSelect = () => {
  const handlegender = (item: { value: string; label: string }) => {};
  return (
    <NiceSelect
      options={[
        { value: "", label: "Select Gender" },
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
        { value: "Others", label: "Others" },
      ]}
      defaultCurrent={0}
      onChange={(item) => handlegender(item)}
      name="gender"
    />
  );
};

export default GenderSelect;
