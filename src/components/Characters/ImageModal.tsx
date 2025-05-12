import { IoMdClose } from "react-icons/io";

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-black bg-white rounded-full p-1 z-10 cursor-pointer"
      >
        <IoMdClose size={24} />
      </button>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onClick={(e) => e.stopPropagation()}
        className="max-w-[90vw] max-h-[90vh] md:w-full md:h-full object-contain rounded border-white shadow-2xl image-rendering: auto | crisp-edges | pixelated;"
      />
    </div>
  );
};

export default ImageModal;
