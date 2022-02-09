import React from 'react';
import { useFormik } from 'formik';
import validations from './Validations';

function SignUp() {
    const {handleSubmit,values,handleChange,handleBlur, errors,touched} = useFormik({
        //state tanımı aslında formik'te bu şekilde yapılıyor...
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          gender:'female',
          hobies:[],
          country:"",
          password:"",
          confirmPassword:""
        },
        onSubmit: values => {
          new Promise((r) => setTimeout(r, 500));
            console.log(values);
        },
        validationSchema:validations
      });
  return (
    <div>
       <h1>Sign Up</h1>
  
  <form onSubmit={handleSubmit}>
    <label htmlFor="firstName">First Name:</label>
    <input name="firstName" value={values.firstName} onChange={handleChange} onBlur={handleBlur} placeholder="Name" />
    {errors.firstName && touched.firstName && <div className='error'>{errors.firstName}</div>}
    <br></br>
    <br></br>

    <label htmlFor="lastName">Last Name:</label>
    <input name="lastName" value={values.lastName} onChange={handleChange} onBlur={handleBlur} placeholder="Last Name" />
    {errors.lastName && touched.lastName &&<div className='error'>{errors.lastName}</div>}
    <br></br>
    <br></br>

    <label htmlFor="email">Email:</label>
    <input
      name="email"
      placeholder="bnc@email.com"
      onChange={handleChange}
      onBlur={handleBlur}
      type="email"
      value={values.email}
    />
    {errors.email && touched.email && <div className='error'>{errors.email}</div>}
    <br></br>
    <br></br>
    <label htmlFor="password">Password:</label>
    <input name="password" type='password' value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder="Password"/>
    {errors.password && touched.password && <div className='error'>{errors.password}</div>}
    <br></br>
    <br></br>
    <label htmlFor="password">Confirm Password:</label>
    <input name="confirmPassword" type='password' value={values.confirmPassword} onBlur={handleBlur} onChange={handleChange} placeholder="Confirm Password"/>
    {errors.confirmPassword && touched.confirmPassword && <div className='error'>{errors.confirmPassword}</div>}
    <br></br>
    <br></br>

    <label htmlFor='gender'>Gender: </label>
    <span>Male</span>
    <input 
      type="radio" 
      name="gender" 
      value="male" 
      onChange={handleChange}
      checked={values.gender==="male"}
      
    />
    <span>Female</span>
    <input 
      type="radio" 
      name="gender" 
      value="female" 
      onChange={handleChange}
      checked={values.gender ==="female"}
    />
    <br></br>
    <br></br>

    <div>
      <input type="checkbox" name="hobies" value="Football" onChange={handleChange}></input>
      Football
    </div>
    <div>
      <input type="checkbox" name="hobies" value="Cinema" onChange={handleChange}></input>
      Cinema
    </div>
    <div>
      <input type="checkbox" name="hobies" value="Photography" onChange={handleChange}></input>
      Photography
    </div>
    <br></br>
    <br></br>

    <label htmlFor='country'>Country:</label>
    <select name="country" onChange={handleChange}>
      <option value="turkey">Turkey</option>
      <option value="england">England</option>
      <option value="usa">USA</option>
    </select>
   
    

    <br></br>
    <br></br>

    <button type="submit">Submit</button>
    <br></br>

    {JSON.stringify(values)}
  </form>
    </div>
  )
}

export default SignUp;
