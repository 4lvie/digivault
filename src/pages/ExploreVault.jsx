import { useState } from "react";
import MemoryForm from "../components/ux/ui/MemoryForm.jsx";

function ExploreVault() {
  return (
    <div className="flex flex-col items-center p-6 gap-6">
      <div>
        <MemoryForm />
      </div>
    </div>
  );
}

export default ExploreVault;
