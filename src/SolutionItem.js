
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {useState,useEffect} from 'react'
const SolutionItem = () => {
    const [input,setInput]=useState('');
    const [loading,setLoading]=useState(true);
    const [solution,setSolution]=useState([]);
    useEffect(() => {
      APIData();
      AOS.init({duration:2000});
    },[]);
    const APIData = async()=>{
      try {
        const response = await axios.get(process.env.REACT_APP_SOLUTION_API);
        setSolution(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
  return (
    <>
    <form>
    <div className="form-group mb-3">
    <input type="text" className="form-control searchBox" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Start Your Search"/>
    </div>
    </form>
    {
        loading && <button className="btn btn-primary" type="button" disabled>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading...
        </button>
    }
    {
        solution.filter((item)=>{
          if(input === ""){
            return item;
          }else if(item.name.toLowerCase().includes(input.toLowerCase())){
            return item;
          }else{
            return false;
          }
        }).map((item)=>{
          return(
            <div className='col-12 col-lg-4' key={item.id}>
            <div className='card p-0 m-2 shadow-sm' data-aos="fade-up" >
        <div className='card-body p-0' style={{overflow:'hidden',}}>
            <img src={item.image} alt={item.name} className='img-fluid imgZoomer' style={{height:'200px',width:'100%'}}/>
        </div>
        <div className='card-footer bg-white'>
            <h5><a href={item.link} target="_blank" rel="noreferrer">{item.name}</a></h5>
            <button className='btn btn-outline-primary'>{`₹ ${item.min_price} - ₹ ${item.max_price}`}</button>
        </div>
            </div>
            </div>
          )
        })
      } 
    </>

     
  )
}

export default SolutionItem