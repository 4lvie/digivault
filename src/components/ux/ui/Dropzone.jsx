import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

// Dropzone component for file uploads
function Dropzone() {
  const [preview, setPreview] = useState(null);
  // Handle file drop.
  const onDrop = useCallback((acceptedFiles) => {
    const firstFile = acceptedFiles[0];
    const reader = new FileReader();
    // Event handlers for file reading.
    reader.onabort = () => console.log("file reading was aborted");
    reader.onerror = () => console.log("file reading has failed");
    reader.onload = () => {
      setPreview(reader.result);
    };
    // Read the file as a data URL.
    reader.readAsDataURL(firstFile);
  }, []);
  // Set up the dropzone with desired configurations.
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  return (
    <div className="flex flex-col items-center">
      <div
        // Dropzone area
        {...getRootProps()}
        // Styling for the dropzone
        className="input input-bordered w-32 h-32 flex-none mr-4 flex items-center justify-center text-center text-sm cursor-pointer"
      >
        <input {...getInputProps()} />
        {!preview ? (
          <p>Upload Image</p>
        ) : (
          <img src={preview} alt="preview" className="object-cover" />
        )}
      </div>
    </div>
  );
}
export default Dropzone;
