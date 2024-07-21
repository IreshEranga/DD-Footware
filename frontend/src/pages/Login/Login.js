// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import '../Login/Login.css';
// import NavBar from '../../components/NavBar';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5000/api/user/login', {
//         email,
//         password
//       });

//       const { name, role, outlet, outletID } = response.data;

//       // Store user details in local storage
//       localStorage.setItem('user', JSON.stringify({ name, email, role, outlet, outletID }));

//       // Navigate based on user role
//       if (role === 'system admin') {
//         navigate('/systemadmin/products');
//       } else if (role === 'outlet admin') {
//         navigate('/outletadmin');
//       } else {
//         toast.error('Access denied');
//       }

//     } catch (err) {
//       setError('Invalid email or password');
//       toast.error('Invalid email or password');
//     }
//   };

//   return (
//     <>
//       <NavBar />
//       <div className="login-container" style={{ marginTop: '150px', padding: '30px' }}>
//         <h1>Login</h1>
//         <form onSubmit={handleSubmit} style={{ marginTop: '30px', width: '450px' }}>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
//           {error && <p className="error-message">{error}</p>}
//         </form>
//       </div>
//     </>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Login/Login.css';
import NavBar from '../../components/NavBar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/user/login', {
        email,
        password
      });

      const { name, role, outlet, outletID } = response.data;

      // Store user details in local storage
      localStorage.setItem('user', JSON.stringify({ name, email, role, outlet, outletID }));

      // Navigate based on user role
      if (role === 'system admin') {
        navigate('/systemadmin/products');
      } else if (role === 'outlet admin') {
        navigate('/outletadmin');
      } else {
        toast.error('Access denied');
      }

    } catch (err) {
      setError('Invalid email or password');
      toast.error('Invalid email or password');
    }
  };

  return (
    <>
      <NavBar />
      <div className="login-container">
        <div className="login-card">
          <center><h1 style={{color:'white'}}>Login</h1></center>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className='loginbtn'>Login</button>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
