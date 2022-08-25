import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const ContactForm = () => {
    const [userData,setUserData]=useState({
        name:'',
        email:'',
        subject:'',
        message:'',
    });
    const handleInput = (e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setUserData({...userData, [name]:value});
    }
    const submitHandler = (e)=>{
        e.preventDefault(); 
       const {name,email,subject,message}= userData;
       if(name.length < 4){
        toast.error('Name should be atleast 4 characters');
       }else if(!RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email)){
        toast.error('Invalid email');
       }else if(subject.length < 4){
        toast.error('Subject should be atleast 4 characters');
       }else if(message.length < 55){
        toast.error('Message should be atleast 55 characters');
       }
       else{
        toast.success('Now you may proceed to backend');
        console.log(userData);
       }
       

    }   
  return (
    <>
    <form>
    <div className="form-floating mb-3">
    <input type="text" className="form-control" id="nameInput" name="name" value={userData.name} onChange={handleInput}/>
    <label htmlFor="nameInput">Name</label>
    </div>
    <div className="form-floating mb-3">
    <input type="email" className="form-control" id="emailInput" name="email" value={userData.email} onChange={handleInput}/>
    <label htmlFor="emailInput">Email address</label>
    </div>
    <div className="form-floating mb-3">
    <input type="text" className="form-control" id="subjectInput" name="subject" value={userData.subject} onChange={handleInput}/>
    <label htmlFor="subjectInput">Subject</label>
    </div>
    <div className="form-floating mb-3">
  <textarea className="form-control" value={userData.message} name="message" id="messageInput" onChange={handleInput}></textarea>
  <label htmlFor="messageInput">Message</label>
</div>
<div className="form-group mb-3">
    <button className="btn btn-primary" onClick={submitHandler}>Send Message</button>
  </div>
    </form>
    <ToastContainer />
    </>
  )
}

export default ContactForm