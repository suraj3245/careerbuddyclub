import NiceSelect from "@/ui/nice-select";
import React from "react";

const StreamSelect = () => {
  const handlestream = (item: { value: string; label: string }) => {};
  return (
    <NiceSelect
      options={[
        { value: "", label: "Select Stream" },
        { value: "Engineering", label: "Engineering" },
        { value: "Architecture", label: "Architecture" },
        { value: "Others", label: "Others" },
      ]}
      defaultCurrent={0}
      onChange={(item) => handlestream(item)}
      name="stream"
    />
  );
};

export default StreamSelect;
