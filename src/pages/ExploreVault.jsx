import { useState } from "react";
import MemoryForm from "../components/ux/ui/MemoryForm.jsx";
import TaskList from "../components/MemoryList.jsx";

function ExploreVault() {
  return (
    <div className="flex flex-col items-center p-6 gap-6">
      <div className="w-full max-w-4xl space-y-6">
        <MemoryForm />
        <TaskList />
      </div>
    </div>
  );
}

export default ExploreVault;
