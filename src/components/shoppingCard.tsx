import { FC } from "react";
import { IProduct } from "../type/interface";

interface IShoppingCard extends IProduct {
  decrementCount: (id: number) => void;
  incrementCount: (id: number) => void;
}
const ShoppingCard: FC<IShoppingCard> = (props) => {
  const { decrementCount, id, incrementCount, count, img, title } = props;
  return (
    <>
      <div className="p-4">
        <div className="">
          <img src={img} alt="" />
        </div>
        <div className="py-1">{title}</div>
        <div className="flex items-center py-1">
          <div onClick={() => {decrementCount(id);}} className="border-2 border-sec px-2">-</div>
          <div className="px-4 border-y-2 border-sec">{count}</div>
          <div onClick={() => incrementCount(id)} className="border-2 border-sec px-1.5">+</div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCard;
