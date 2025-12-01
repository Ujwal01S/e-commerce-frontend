"use client";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { X } from "lucide-react";
import ReactDOM from "react-dom";
import Image from "next/image";

interface Props {
  imgUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageViewerModal = ({ imgUrl, isOpen, onClose }: Props) => {
  if (!isOpen || !imgUrl) return null;

  const modalContent = (
    <div className="fixed inset-0 bg-black/90 z-9999 flex items-center justify-center p-4">
      <PhotoProvider
        maskOpacity={0.7}
        onVisibleChange={(visible) => !visible && onClose()}
        toolbarRender={({ onScale, scale }) => (
          <>
            <button
              className="react-photo-view__toolbar-icon"
              onClick={() => onScale(scale > 1 ? scale - 1 : 1)}
            >
              -
            </button>
            <span className="react-photo-view__toolbar-label">
              {Math.round(scale * 100)}%
            </span>
            <button
              className="react-photo-view__toolbar-icon"
              onClick={() => onScale(scale + 1)}
            >
              +
            </button>
          </>
        )}
      >
        <PhotoView src={imgUrl}>
          <Image
            alt="fullView"
            src={imgUrl}
            width={1200}
            height={800}
            className="object-contain w-full h-full cursor-zoom-in"
            onClick={(e) => e.stopPropagation()}
          />
        </PhotoView>
      </PhotoProvider>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
      >
        <X size={24} />
      </button>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default ImageViewerModal;
