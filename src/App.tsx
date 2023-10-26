import { useState } from 'react'
import './App.css'
import Products from './components/cardList'
import FilterList from './components/filter'

import { IFilter } from './type/interface'

function App() {
  const [filter ,setFilter] = useState<IFilter>()
  return (
    <>
      <div className="flex h-full w-full ">
        <div className="w-[300px] flex flex-300 min-h-screen border-r-2 border-sec border-opacity-60">
          <FilterList setFilter={setFilter}/>
        </div>
        <div className="h-full w-full">
          <Products filter={filter}/>
        </div>
      </div>
    </>
  )
}

export default App
