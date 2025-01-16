const ProductCard = (props: any) => {
  const { img, label } = props;
  return (
    <div className="rounded-md border brder-gray-300">
      <img className="w-[360px] rounded-t-md h-[360px]" src={img} alt="" />
      <p className="p-2 text-left">{label}</p>
    </div>
  );
};

export default ProductCard;
