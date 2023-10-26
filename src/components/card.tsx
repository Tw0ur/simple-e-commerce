import { Rating } from "@mui/material";
import { ICard, IProduct } from "../type/interface";



const Card = (props: ICard) => {
  const {setProduct , star , prevPrice,newPrice ,title , img ,id} = props
  const starRating = parseFloat(star!);
 
  const handleAddToCart = () => {
    setProduct((prevProducts:IProduct[]) => {
      // Проверяем, существует ли элемент с данным id в массиве
      const existingProductIndex = prevProducts.findIndex(({id} : {id:number}) => id === props.id);

      if (existingProductIndex === -1) {
        // Если элемент с данным id не существует, добавляем новый
        const newProduct = {
          id: id,
          productId: prevProducts.length + 1,
          count: 1,
          title: title,
          newPrice: newPrice,
          img: img,
          rating: starRating,
        };
        return [...prevProducts, newProduct];
      }
      return prevProducts;
    });
  };
  

  return (
    <div className="flex flex-wrap mt-8 -z-2">
      <div className="m-4 border border-gray-300 py-4 px-8 cursor-pointer">
        <div className="min-h-[200px] flex items-center">
          <img src={img} alt={title} className="w-72 mb-2" />
        </div>
        <div className="">
          <h3 className="mb-2">{title}</h3>
          <div className="flex mb-2 items-center gap-2">
            <Rating name="read-only" readOnly defaultValue={starRating} size="small" precision={0.5} />
            <span>{starRating}</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-1">
              <div className="line-through">{prevPrice}</div>
              <div>${newPrice}</div></div>
            <div className="rounded-full px-4 py-1 border-sec border" onClick={handleAddToCart}>
              Buy
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
