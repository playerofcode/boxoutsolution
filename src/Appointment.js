import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Appointment = () => {
    const [userData,setUserData]=useState({
        name:'',
        email:'',
        mobno:'',
        type:'',
        subject:'',
        message:'',
        date_time:''
    });
    const handleInput = (e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setUserData({...userData, [name]:value});
    }
    const submitHandler = (e)=>{
        e.preventDefault(); 
        const {name,email,mobno,message,type,date_time}= userData;
        if(name.length < 4){
         toast.error('Name should be atleast 4 characters');
        }else if(!RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email)){
         toast.error('Invalid email');
        }else if(!mobno.match('[0-9]{10}')){
         toast.error('Invalid Mobile Number');
        }else if(type.length < 2){
         toast.error('Choose Meeting Type');
        }
        else if(message.length < 30){
            toast.error('Please write at least 30 characters');
           }
        else if(date_time.length === ''){
        toast.error('Please choose date and time');
        }
        else{
         toast.success('Now you may proceed to backend');
         console.log(userData);
        }
    }
  return (
    <>
    <div className="container">
        <div className="row py-4">
            <div className="col-12 col-lg-12">
            <h3 className='text-center'>Make An Appointment</h3>
            <form>
    <div className="form-floating mb-3">
    <input type="text" className="form-control" id="nameInput" name="name" value={userData.name} onChange={handleInput}/>
    <label htmlFor="nameInput">Name</label>
    </div>
    <div className="form-floating mb-3">
    <input type="text" className="form-control" id="emailInput" name="email" value={userData.email} onChange={handleInput}/>
    <label htmlFor="emailInput">Email address</label>
    </div>
    <div className="form-floating mb-3">
    <input type="tel" className="form-control" id="nameInput" name="mobno" value={userData.mobno} onChange={handleInput}/>
    <label htmlFor="nameInput">Mobile Number</label>
    </div>
    <div className="form-floating mb-3">
  <select className="form-select" id="typeSelect" name="type" value={userData.type} onChange={handleInput}>
    <option value="NA">Select</option>
    <option value="Google Meet">Google Meet</option>
    <option value="Zoom">Zoom</option>
  </select>
  <label htmlFor="typeSelect">How shall we connect?</label>
</div>
    <div className="form-floating mb-3">
  <textarea className="form-control" value={userData.message} name="message" id="messageInput" onChange={handleInput}></textarea>
  <label htmlFor="messageInput">Please share us anything that will help us prepare for the meeting.</label>
</div>
<div className="form-floating mb-3">
    <input type="datetime-local" className="form-control" id="dateTimeInput" name="date_time" value={userData.date_time} onChange={handleInput}/>
    <label htmlFor="dateTimeInput">Subject</label>
    </div>
<div className="form-group mb-3">
    <button className="btn btn-primary" onClick={submitHandler}>Send Message</button>
  </div>
    </form>
    <ToastContainer />
            </div>
        </div>
    </div>
    </>
  )
}

export default Appointment