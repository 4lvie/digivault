import MemoryForm from "../components/forms/MemoryForm.jsx";
import Card from "../components/ui/Card.jsx";
import MemoryList from "../components/visualizers/MemoryList.jsx";
import { useState } from "react";

/**
 * ExploreVault page component - main memory management interface
 * Allows users to add new memories and view/edit existing ones
 * Manages memory editing state and modal interactions
 * @returns {JSX.Element} Memory management page with form and list components
 */
function ExploreVault() {
  const [editMemory, setEditMemory] = useState(null);

  /**
   * Handle memory editing - opens modal with memory data
   */
  const handleEditMemory = (memory) => {
    setEditMemory(memory);
    document.getElementById("memoryform").showModal(); // Open modal
  };

  /**
   * Handler to clear or set editMemory state when form is closed/opened
   */
  const handleSetMemory = (memory) => {
    setEditMemory(memory);
  };

  // Main container with gradient background and padding
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center py-12 px-6">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-2">
          Explore Your Vault
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Store your memories, view them anytime, and keep them safe forever.
        </p>
      </header>

      {/* Main content */}
      <main className="w-full max-w-6xl space-y-10">
        {/* Form section */}
        <Card className="p-8 bg-white border border-blue-100">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">
            Add a New Memory
          </h2>
          <MemoryForm initialData={editMemory} onClose={handleSetMemory} />
        </Card>

        {/* List section */}
        <Card className="bg-blue-50 shadow-lg p-8 border border-blue-100 space-y-6 sm:space-y-8 space-x-4">
          <MemoryList onEdit={handleEditMemory} />
        </Card>
      </main>
    </div>
  );
}

export default ExploreVault;
