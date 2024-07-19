import React from 'react'
import NavBar from '../../components/NavBar'
import '../../components/NavBar.css'
import foot from '../../assets/foot.jpg'
import foot1 from '../../assets/foot.avif'
import FormExample from './contactForm';

const Home = () => {
  return (
    <div>
        
            <NavBar/>

            <div className="bodycontainer">
                <img src={foot} alt="foot" style={{width: '100%', height: '500px' }} />

                <div className="btext" style={{color:'white', fontFamily:'serif', fontStyle:'italic', fontWeight:'bolder',marginTop:'-300px', textAlign:'right', marginRight:'100px', fontSize:'80px'}}>
                    DD Foot Ware
                </div>
            </div>

            {/* <h1 style={{color:'black', fontFamily:'serif', fontStyle:'italic', fontWeight:'bolder', marginTop:'250px', textAlign:'center', fontSize:'50px'}}>Who We Are</h1>
            <div style={{textAlign:'center', marginTop:'30px'}}>
                <img src={foot1} alt="quality" style={{width: '40%', height: 'auto' , marginLeft:'-800px'}} />
            </div>
            <p style={{color:'black', fontFamily:'serif', fontStyle:'italic', marginTop:'30px', textAlign:'right', fontSize:'20px'}}>
                We are a footware company that provides high quality footwear to our customers. We take pride in our products and strive to provide the best for our customers. Our footwear is made with the highest quality materials and is designed to provide comfort and support for your feet. We stand behind our products and are committed to providing the best service to our customers.
            </p> */}

    <h1 style={{
        color: 'black',
        fontFamily: 'serif',
        fontStyle: 'italic',
        fontWeight: 'bolder',
        marginTop: '250px',
        textAlign: 'center',
        fontSize: '50px'
      }}>
        Who We Are
      </h1>
      <div style={{
        display: 'flex',
        alignItems: 'center', // Center items vertically
        justifyContent: 'center', // Center items horizontally if needed
        marginTop: '30px',
        textAlign: 'left' // Adjust alignment for the content
      }}>
        <img 
          src={foot1} 
          alt="quality" 
          style={{ width: '40%', height: 'auto', marginRight: '20px' ,marginLeft:'50px'}} // Space between image and text
        />
        <p style={{
          color: 'black',
          fontFamily: 'serif',
          fontStyle: 'italic',
          fontSize: '20px',
          margin: 0 // Remove default margin
        }}>
          We are a footware company that provides high quality footwear to our customers. We take pride in our products and strive to provide the best for our customers. Our footwear is made with the highest quality materials and is designed to provide comfort and support for your feet. We stand behind our products and are committed to providing the best service to our customers.
        </p>
      </div>

      <h1 style={{textAlign:'center', fontFamily:'bold', marginTop:'150px'}}>Contact Us</h1>
        <div className="contact" style={{backgroundColor:'gray', width:'75%', marginLeft:'200px', borderRadius:'20px'}}>
            
            <FormExample/>
        </div>
        <br /><br /><br /><br />
        
    </div>
  )
}

export default Home