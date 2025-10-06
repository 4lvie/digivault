import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

/**
 * Dropzone component for file uploads with drag and drop functionality
 * @param {Object} props - Component props
 * @param {string|null} props.memoryImage - Current image data (base64 or URL)
 * @param {function} props.onChange - Callback function when file is selected/dropped
 * @param {boolean} [props.required=false] - Whether the field is required
 * @returns {JSX.Element} File upload dropzone component
 */
function Dropzone({ memoryImage, onChange, required = false }) {
  /**
   * Handle file drop event - converts file to base64 and calls onChange
   */
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (!file) {
        return;
      }

      // Convert file to base64 using FileReader
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result;
        onChange?.(base64Data);
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
          <img
            src={memoryImage}
            alt="preview"
            className="object-contain h-[95%] w-full"
          />
        )}
      </div>
    </div>
  );
}
export default Dropzone;
