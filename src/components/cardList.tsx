import React from "react";
import data from "../data/products";
import Card from "./card";
import { IFilter, IProduct } from "../type/interface";
import Shopping from "./shopping";

interface Filter {
  filter?: IFilter;
}

const Products: React.FC<Filter> = (props) => {
  const { filter } = props;
  const [filteredData, setFilteredData] = React.useState(data);
  const [query ,setQuery] = React.useState<string>('')
  const [bag ,setBag] = React.useState<boolean>(false)
  const [product ,setProduct] = React.useState<IProduct[]>([])
  console.log(product);
  
  React.useEffect(() => {
    const filterData = () => {
      const newFilteredData = data.filter((product) => {
        if (filter?.color && product.color !== filter.color) return false;
        if (filter?.category && product.category !== filter.category) return false;
        if (filter?.price) {
          const { priceStart, priceEnd } = filter.price;
          if (priceStart !== undefined && priceStart > product.newPrice) return false;
          if (priceEnd !== undefined && priceEnd < product.newPrice) return false;
        }
        return true;
      });

      setFilteredData(newFilteredData);

      // Фильтрация результатов поиска на основе filteredData и query
      const filteredResults = newFilteredData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filteredResults);
    };
    filterData();
  }, [filter, query]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    setQuery(searchText);
  };
  
  return (
    <>
      <nav className="h-12 w-full">
        <div className="w-full h-full border-b-2 border-sec border-opacity-60 pl-12 flex justify-between items-center">
          <div>
            <input
              type="text"
              name="search"
              id="search"
              className="p-1 bg-sec border-0"
              placeholder="Search..."
              value={query}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-[300px] flex justify-center">
          <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/shopping-cart--v1.png" alt="shopping-cart--v1" onClick={() => setBag((e) => !e)}/>
          </div>
        </div>
      </nav>
      <div className="flex flex-wrap gap-3 ml-3 h-full relative">
        {filteredData.map((product) => (
          <Card key={product.id} id={product.id} img={product.img} title={product.title}  star={product.star} newPrice={product.newPrice} prevPrice={product.prevPrice} setProduct={setProduct}/>
        ))}
        {bag && <div className="absolute right-0 w-[300px]">
          <div className=" w-full bg-white min-h-[200px] border-sec border-l-2 border-b-2 border-opacity-60 relative">
            <Shopping setProduct={setProduct} product={product}/>
          </div>
        </div>}
        
      </div>
    </>
  );
};

export default Products;
