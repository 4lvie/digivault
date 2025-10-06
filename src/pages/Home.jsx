import { useAuth } from "../context/AuthContext";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Avatar from "../components/ui/Avatar";
import LinkButton from "../components/ui/LinkButton";

function Home() {
  const user = useAuth();
  const userName = user?.user_metadata?.name || "to Digivault";
  const avatarUrl = user?.user_metadata?.avatar_url;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-100 via-pink-100 to-gray-100 px-4">
      <Card className="max-w-2xl w-full bg-white/80 p-10 flex flex-col items-center mb-8">
        <h1 className="text-4xl font-extrabold text-red-400 mb-2 tracking-tight drop-shadow text-center">
          Welcome {user ? userName : "to Digivault"}!
        </h1>
        {user && (
          <Avatar
            src={avatarUrl}
            alt={userName}
            size="lg"
            className="mb-4 shadow-lg"
          />
        )}
        <p className="text-lg text-gray-700 text-center mb-6">
          Your secure digital vault for memories, images, and personal moments.
          <br />
          <span className="text-purple-500 font-semibold">
            Store, organize, and relive your best experiences.
          </span>
        </p>
        {!user && (
          <LinkButton to="/login" type={null} variant="primary">
            Login to get started
          </LinkButton>
        )}
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <Card className="bg-white border border-blue-100 shadow-lg p-6 flex flex-col items-center">
          <span className="text-4xl mb-2">🖼️</span>
          <h3 className="text-xl font-bold text-blue-700 mb-2">
            Visualize Memories
          </h3>
          <p className="text-gray-600 text-center">
            See your memories as beautiful cards and icons. Relive your favorite
            moments with a modern, responsive UI.
          </p>
        </Card>
        <Card className="bg-white border border-purple-100 shadow-lg p-6 flex flex-col items-center">
          <span className="text-4xl mb-2">➕</span>
          <h3 className="text-xl font-bold text-purple-700 mb-2">Add & Edit</h3>
          <p className="text-gray-600 text-center">
            Easily add new memories, edit details, and upload images. Organize
            your vault with just a few clicks.
          </p>
        </Card>
        <Card className="bg-white border border-pink-100 shadow-lg p-6 flex flex-col items-center">
          <span className="text-4xl mb-2">🔒</span>
          <h3 className="text-xl font-bold text-pink-700 mb-2">
            Secure & Private
          </h3>
          <p className="text-gray-600 text-center">
            Your memories are safe. Digivault uses Supabase for secure
            authentication and private storage.
          </p>
        </Card>
      </div>
      <a
        href="https://github.com/4lvie/digivault"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6"
      >
        <Button className="px-6 py-6 bg-gray-900 text-white shadow-md hover:bg-gray-700 transition font-semibold flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          Alvie on GitHub
        </Button>
      </a>
    </div>
  );
}

export default Home;
