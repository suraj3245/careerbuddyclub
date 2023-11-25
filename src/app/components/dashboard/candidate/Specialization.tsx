import NiceSelect from "@/ui/nice-select";
import React from "react";

const SpecializationSelect = () => {
  const handleSpecialization = (item: { value: string; label: string }) => {};
  return (
    <NiceSelect
      options={[
        { value: "", label: "select Specialization" },
        { value: "computer engineering", label: "computer engineering" },
        { value: "civil engineering", label: "civil engineering" },
        { value: "electrical engineering", label: "electrical engineering" },

        { value: "Others", label: "Others" },
      ]}
      defaultCurrent={0}
      onChange={(item) => handleSpecialization(item)}
      name="Specialization"
    />
  );
};

export default SpecializationSelect;
