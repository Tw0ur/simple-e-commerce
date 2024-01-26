import { FC } from "react";
import { IProduct, IShopping } from "../type/interface";
import ShoppingCard from "./shoppingCard";

interface IShop extends IShopping {
  setProduct: (product: IProduct[]) => void;
}
const Shopping: FC<IShop> = (props) => {
  const { setProduct, product } = props;
  const incrementCount = (id: number) => {
    setProduct((prevProducts: IProduct[]) => {
      const updatedProducts = prevProducts.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: product.count + 1,
          };
        }
        return product;
      });
      return updatedProducts;
    });
  };

  // Функция для уменьшения count
  const decrementCount = (id: number) => {
    setProduct((prevProducts) => {
      const updatedProducts = prevProducts.map((product) => {
        if (product.id === id) {
          const updatedCount = product.count - 1;
          if (updatedCount >= 0) {
            return {
              ...product,
              count: updatedCount,
            };
          }
        }
        return product;
      });

      const filteredProducts = updatedProducts.filter(
        (product: IProduct) => product.count! > 0
      );
      return filteredProducts;
    });
  };

  const calculateTotal = (product: IProduct[]) => {
    const total = product.reduce((accumulator, currentProduct) => {
      console.log(accumulator);
      const productTotal =currentProduct.count! * +currentProduct.newPrice;
      console.log(productTotal);
      
      return accumulator + productTotal;
    }, 0);

    return total;
  };
  console.log(product);
  
  return (
    <>
      {product.length !== 0 ?( <>{product.map((e) => (
        <ShoppingCard
          key={e.id}
          {...e}
          incrementCount={incrementCount}
          decrementCount={decrementCount}
        />
      ))}
      <div className="text-center p-4">Total: ${calculateTotal(product)}</div></> )
      :
      (<div className="flex justify-center items-center h-full w-full py-20">В корзине пусто</div>)
      }
      
    </>
  );
};

export default Shopping;
