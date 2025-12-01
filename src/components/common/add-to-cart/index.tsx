const AddToCart = ({ onClick }: { onClick: (e: React.MouseEvent) => void }) => {
  return (
    <button
      className="w-full bg-black text-white text-center py-2 absolute bottom-0 text-sm cursor-pointer font-medium"
      onClick={onClick}
    >
      Add To Cart
    </button>
  );
};

export default AddToCart;
