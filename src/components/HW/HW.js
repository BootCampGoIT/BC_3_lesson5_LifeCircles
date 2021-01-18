import React, { useState } from "react";

const initialState = {
  images: [],
  page: 1,
  search: "",
};

const getPhoto = async (search, page = 1) => {
        const result =  await axios.get(`https://fghjkl?q=${search}&page${page}`);
    setState(prev=>({...prev, images: [...result], page: 2}))      
};

const loadMore = (search, page = 1) => {
    const result =  await axios.get(`https://fghjkl?q=${search}&page${page}`);
    setState(prev=>({...prev, images: [...prev.images, ...result], page: prev.page+1}))
}

const HW = () => {
  const [state, setState] = useState({ ...initialState });
  return (
    <div>
      <form>
        <input
          type='text'
          onChange={(e) =>
            setState((prev) => ({ ...prev, search: e.target.value }))
          }
        />
        <button onClick={() => getPhoto(state.search)}>Search</button>
      </form>

      {/* -------------- */}
      {state.images.map((item) => (
        <li>image</li>
      ))}

      {state.images.length && <button onClick={()=>loadMore(state.search, state.page)}>LoadMore</button>}
    </div>
  );
};

export default HW;

// Api.js
