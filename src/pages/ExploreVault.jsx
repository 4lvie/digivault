/**
 * ExploreVault Page Component
 * This page allows users to add new memories and view existing ones.
 * It includes a header, a form for adding memories, and a list of memories.
 *
 * @component
 * @returns {JSX.Element} The rendered ExploreVault page.
 *
 * @usage
 * <ExploreVault />
 *
 * Note: Ensure that the MemoryForm and MemoryList components are correctly implemented and imported.
 */
import MemoryForm from "../components/ux/ui/MemoryForm.jsx";
import MemoryList from "../components/MemoryList.jsx";

function ExploreVault() {
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
        <section className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">
            Add a New Memory
          </h2>
          <MemoryForm />
        </section>

        {/* List section */}
        <section className="bg-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100 space-y-6 sm:space-y-8 space-x-4">
          <MemoryList />
        </section>
      </main>
    </div>
  );
}

export default ExploreVault;
