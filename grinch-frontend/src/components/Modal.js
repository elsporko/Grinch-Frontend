import React from "react";
import Modal from 'react-modal';
import {FormProvider, useForm} from 'react-hook-form';

function UserModal ({isOpen, toggle}){
  const methods = useForm()

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
    toggle()
  })

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const { handleSubmit, register, formState: { errors }} = useForm()
  
  return(
    <div>
      <Modal isOpen={isOpen} style={customStyles} contentLabel="Add User">
        <div>
          <h1>Add User</h1>
          <FormProvider {...methods}>
            <form onSubmit={ handleSubmit(onSubmit)} noValidate className="container">
              <label>Username: <input name="username" {...register('username', {
                                                                                required: "Required",
                                                                                pattern: {
                                                                                  value: true, 
                                                                                  message: "Required",}})}/></label>
              {errors.username && errors.username.message}
              <hr/>
              <label>Passowrd: <input name="password1"/></label>
              <hr/>
              <label>Passowrd confirmation: <input name="password2"/></label>
              <hr/>
              <label>First Name: <input name="first_name"/></label>
              <hr/>
              <label>Last Name: <input name="last_name"/></label>
              <hr/>
              <label>Email: <input name="email"/></label>
              <hr/>

              <button>Submit</button>{' '}
              <button onClick={toggle}>Cancel</button>
            </form>
        </FormProvider>
        </div>
      </Modal>
    </div>
  )
}

export default UserModal;
