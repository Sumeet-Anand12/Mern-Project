import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
const Register = () => {
  const [name, setName] = useState("Sumit");
  const [email, setEmail] = useState("sumit@gmail.com");
  const [password, setPassword] = useState("123456");
  const [phone, setPhone] = useState("7033913604");
  const [address, setAddress] = useState("Delhi");
  const [answer, setAnswer] = useState("cricket");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
   try {
         const res = await axios.post("/api/v1/auth/register", { 
          name, 
          email,
          password, 
          phone, 
          address,
          answer
          }
        

         );
        //  console.log(res);
         if (res && res.data.success) {
              toast.success(res.data && res.data.message);
              navigate("/login");
            } else {
              toast.error(res.data.message,{
                duration: 9000
              });
            }

   } catch(error){
    console.log(error,{
      duration: 7000
    });
    toast.error('somthing went wrong');

   }
    
    
  //  console.log(process.env.REACT_APP_API);
  };

  return (
    <Layout title="Register - Ecommer App">
      <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="1"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id=""
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="2"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="3"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="4"
              placeholder="Enter Your Address"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="5"
              placeholder="What is Your Favorite sports"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;