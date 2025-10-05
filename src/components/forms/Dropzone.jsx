import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

// Dropzone component for file uploads
function Dropzone({ memoryImage, onChange, required = false }) {
  // Handle file drop.

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result; // Esto será "data:image/png;base64,...."
        onChange?.(base64Data); // lo mandamos al MemoryForm
      };
      reader.readAsDataURL(file);
    },
    [onChange]
  );

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
        <input {...getInputProps()} required={required} />
        {!memoryImage ? (
          <p>Upload Image</p>
        ) : (
          <img src={memoryImage} alt="preview" className="object-cover" />
        )}
      </div>
    </div>
  );
}
export default Dropzone;
