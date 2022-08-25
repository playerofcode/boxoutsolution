import {useState} from 'react'

const SearchBar = () => {
    const [input,setInput]=useState('school');
  return (
    <>
    <form>
    <div className="input-group mb-3">
    <input type="text" className="form-control searchBox" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Start Your Search" aria-describedby="button-addon2"/>
    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
    </div>
    </form>
    </>
  )
}

export default SearchBar