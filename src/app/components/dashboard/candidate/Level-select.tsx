import NiceSelect from "@/ui/nice-select";
import React from "react";

const LevelSelect = () => {
  const handlelevel = (item: { value: string; label: string }) => {};
  return (
    <NiceSelect
      options={[
        { value: "", label: "select Level" },
        { value: "PG", label: "PG" },
        { value: "UG", label: "UG" },
        { value: "Others", label: "Others" },
      ]}
      defaultCurrent={0}
      onChange={(item) => handlelevel(item)}
      name="level"
    />
  );
};

export default LevelSelect;
