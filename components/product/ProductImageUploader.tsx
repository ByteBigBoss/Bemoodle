"use client"
import { Image } from '@nextui-org/image';
import { Upload } from 'lucide-react';
import { useRef, useState } from 'react';

interface ProductImageUploaderProps {
    setFiles: (files: File[]) => void; // Expect the setter function from the parent
}

const ProductImageUploader = ({ setFiles }: ProductImageUploaderProps) => {
    const [localFiles, setLocalFiles] = useState<File[]>([]); // Local state to manage files
    const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]); // Store refs for each file input

    // Handle file change for a specific index
    const handleFileChange = (newFiles: File[], index: number) => {
        const updatedFiles = [...localFiles];
        updatedFiles[index] = newFiles[0]; // Replace only the specific image
        setLocalFiles(updatedFiles.slice(0, 3)); // Limit to 3 images
        setFiles(updatedFiles.slice(0, 3)); // Update parent state
    };

    // Trigger file upload input for a specific index
    const handleClick = (index: number) => {
        if (fileInputRefs.current[index]) {
            fileInputRefs.current[index]?.click();
        }
    };

    return (
        <div className="grid gap-2">
            {/* Main product image */}
            {localFiles.length > 0 ? (
             <Image
             alt="Product image"
             className="aspect-square border border-[#0000001f] w-full rounded-md object-cover"
             height="300"
             width="300"
             src={URL.createObjectURL(localFiles[0])} // Display first image
             onClick={() => handleClick(0)} // Click to change the main image
         />
            ) : (
                <div
                    className="aspect-square border border-[#0000001f] w-full rounded-md object-cover bg-gray-200 cursor-pointer"
                    onClick={() => handleClick(0)} // Click to upload the main image
                />
            )}
            <input
                ref={(el) => (fileInputRefs.current[0] = el)} // Store reference to the first input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(Array.from(e.target.files || []), 0)}
                className="hidden"
            />

            {/* Thumbnails or upload buttons */}
            <div className="grid grid-cols-3 gap-2">
                {localFiles.slice(1, 3).map((file, index) => (
                    <div key={index + 1} onClick={() => handleClick(index + 1)} className="cursor-pointer">
                        <Image
                            alt="Product image"
                            className="aspect-square border border-[#0000001f] w-full rounded-md object-cover"
                            height="84"
                            width="84"
                            src={URL.createObjectURL(file)} // Display thumbnails
                        />
                    </div>
                ))}

                {/* Empty slots if less than 3 images */}
                {localFiles.length < 3 &&
                    Array(3 - localFiles.length)
                        .fill(null)
                        .map((_, index) => (
                            <button
                                key={`upload-btn-${localFiles.length + index}`}
                                onClick={() => handleClick(localFiles.length + index)}
                                className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed"
                            >
                                <Upload className="h-4 w-4 text-muted-foreground" />
                            </button>
                        ))}
            </div>

            {/* Hidden input for each image */}
            {Array(3)
                .fill(null)
                .map((_, index) => (
                    <input
                        key={index}
                        ref={(el) => (fileInputRefs.current[index] = el)} // Store references for all inputs
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(Array.from(e.target.files || []), index)}
                        className="hidden"
                    />
                ))}
        </div>
    );
};

export default ProductImageUploader;
