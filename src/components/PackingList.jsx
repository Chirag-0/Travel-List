import { useState } from "react";
import Item from './Item'; 

export default function PackingList({items,onDeleteItem,onToggleItems,onRemoveAll}){
    const [sortBy,setSortBy] = useState('input');
    let sortedItems;
    if(sortBy === 'input') sortedItems = items
    if(sortBy === 'description'){
      sortedItems = items.slice().sort((a,b)=>a.desc.localeCompare(b.desc));
    }
    if(sortBy === 'packed'){
      sortedItems = items.slice().sort((a,b)=>Number(a.packed) - Number(b.packed));
    }
    return (
      <div className="list">
        <ul >
          {sortedItems.map(item=><Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItems={onToggleItems} />)}
        </ul>
  
        <div className="actions">
          <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description </option>
            <option value="packed">Sort by packed status</option>
          </select>
        </div>
        <button onClick={onRemoveAll}>Clear list</button>
      </div>
    )
  }