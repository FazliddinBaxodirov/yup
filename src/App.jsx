import React from 'react';
import { Button } from 'antd';
import './App.css';
import { useFormik } from 'formik';
import { loginSchema } from './validation';

function App() {
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: '',
      surname: '',
      age: '',
      email: '',
      number: '',
      adress: ''
    },
    validationSchema: loginSchema,
  });
  
  

  return (
    <div className='w-[1000px] mx-auto mt-[80px] text-center'>
      <h2 className='font-bold text-[30px] mb-[30px]'>Complete this form about your information</h2>
      <form onSubmit={handleSubmit} className='w-full space-y-[20px] flex flex-col'>
        <label>
          <input
            type="text"
            id='name'
            name='name'
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${touched.name && errors.name ? "!border-red-500 placeholder:!text-red-500" : ""} py-[10px] outline-none pl-[25px] w-full border-[1px] border-slate-200 rounded-md focus:shadow-md`}
            size='large'
            placeholder='Enter your name...'
          />
          {touched.name && errors.name ? <div className="text-red-500 w-[90%] mx-auto text-start text-[15px] pt-[8px]">{errors.name}</div> : null}
        </label>
        <label>
          <input
            type="text"
            id='surname'
            name='surname'
            value={values.surname}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${touched.surname && errors.surname ? "!border-red-500 placeholder:!text-red-500" : ""} py-[10px] outline-none pl-[25px] w-full border-[1px] border-slate-200 rounded-md focus:shadow-md`}
            size='large'
            placeholder='Enter your surname...'
          />
          {touched.surname && errors.surname ? <div className="text-red-500 w-[90%] mx-auto text-start text-[15px] pt-[8px]">{errors.surname}</div> : null}
        </label>
        <label>
          <input
            type="number"
            id='age'
            name='age'
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${touched.age && errors.age ? "!border-red-500 placeholder:!text-red-500" : ""} py-[10px] outline-none pl-[25px] w-full border-[1px] border-slate-200 rounded-md focus:shadow-md`}
            size='large'
            placeholder='Enter your age...'
          />
          {touched.age && errors.age ? <div className="text-red-500 w-[90%] mx-auto text-start text-[15px] pt-[8px]">{errors.age}</div> : null}
        </label>
        <label>
          <input
            type="email"
            id='email'
            name='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${touched.email && errors.email ? "!border-red-500 placeholder:!text-red-500" : ""} py-[10px] outline-none pl-[25px] w-full border-[1px] border-slate-200 rounded-md focus:shadow-md`}
            size='large'
            placeholder='Enter your email...'
          />
          {touched.email && errors.email ? <div className="text-red-500 w-[90%] mx-auto text-start text-[15px] pt-[8px]">{errors.email}</div> : null}
        </label>
        <label>
          <input
            type="tel"
            id='number'
            name='number'
            value={values.number}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${touched.number && errors.number ? "!border-red-500 placeholder:!text-red-500" : ""} py-[10px] outline-none pl-[25px] w-full border-[1px] border-slate-200 rounded-md focus:shadow-md`}
            size='large'
            placeholder='Enter your phone number...'
          />
          {touched.number && errors.number ? <div className="text-red-500 w-[90%] mx-auto text-start text-[15px] pt-[8px]">{errors.number}</div> : null}
        </label>
        <label>
          <input
            type="text"
            id='adress'
            name='adress'
            value={values.adress}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${touched.adress && errors.adress ? "!border-red-500 text-red-500" : ""} py-[10px] outline-none pl-[25px] w-full border-[1px] border-slate-200 rounded-md focus:shadow-md`}
            size='large'
            placeholder='Enter your address...'
          />
          {touched.adress && errors.adress ? <div className="text-red-500 w-[90%] mx-auto text-start text-[15px] pt-[8px]">{errors.adress}</div> : null}
        </label>

        <Button className='py-[10px] pl-[25px]' type='primary' size='large' htmlType='submit'>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default App;
