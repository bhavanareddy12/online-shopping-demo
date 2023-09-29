import React from "react";
import { Formik } from "formik";
import { object, string } from "yup";
import { Form } from "react-bootstrap";
import {Button} from 'react-bootstrap';
import {FaUserCircle} from 'react-icons/fa';
import {loginApiData} from '../../services/loginApi';
import {userNameFunc,clearLocalStorageFunc} from '../../utils/localStoargeData';
import { useNavigate } from 'react-router-dom';
import ToastMessage from '../../components/ToastMessage';

const LoginValidation = object().shape({
  username: string().min(2,"Username length is too short").max(10,"Username length is too long").required("Username is a required field").matches(/^[a-z0-9_]+([a-z0-9_](_|-| )[a-z0-9_])*[a-z0-9_]+$/, "Valid Username required"),
  password: string().min(2, "Password length is too short").max(10,"Password length is too long").required("Password is a required field").matches(/^[a-z0-9_*#%@$^&]+([a-z0-9_*#%@$^&](_|-| )[a-z0-9_*#%@$^&])*[a-z0-9_*#%@$^&]+$/, "Valid Password required"),
});

function Login() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = React.useState(false);
  const [toastData, setToastData] = React.useState({
      show:false,
      msg:'',
      type:''
  });
  const [disable, setDisable] = React.useState(false)

  const handleToggle = () => setIsChecked(!isChecked);

  //SignIn function
  const handleSubmit = async(values) => {
    setDisable(true)
    userNameFunc(values.username)
    const response = await loginApiData(values.username, values.password)
    if(response.code === 'ERR_BAD_REQUEST'){
      clearLocalStorageFunc()
      setToastData({
        show:true,
        msg:'SignIn in failed. Please verify Username or password',
        type:'error'
      })
      setTimeout(()=>{
        setDisable(false)
      },2000)
    }
    else{
      setToastData({
        show:true,
        msg:'Successfully SignIn',
        type:'success'
      })
      setDisable(false)
      setTimeout(()=>{
        navigate('/');
      },5000)
    }
  };

  return (
    <div className="h-screen flex items-center justify-center flex-col bg-gray-100">
      {toastData.show && <ToastMessage toastData={toastData}/>}
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={LoginValidation}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => {
          return (
            <Form noValidate onSubmit={handleSubmit} className=" w-6/12 shadow-md rounded px-8 pt-6 pb-8">
              <div className="text-center text-white"><FaUserCircle style={{fontSize:'150px'}}/></div>
              <div className={`mt-3 custom-input ${errors.username && touched.username && errors.username ? 'errorInput' : ''}`}>
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  placeholder="Enter username"
                  className="form-control inp_text"
                  id="username"
                />
              </div>
                {/* If validation is not passed show errors */}
                <p className="error mt-1">
                  {errors.username && touched.username && errors.username}
                </p>
              <div className={`mt-3 custom-input input-group ${errors.password && touched.password && errors.password ? 'errorInput' : ''}`}>
                <input
                  type={`${isChecked ? 'text ' : 'password'}`}
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />
                <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2"><Form.Check className="password-toggle"
          type="switch" checked={isChecked}
          onChange={handleToggle}
        /></span>
                </div>
              </div>
                 {/* If validation is not passed show errors */}
                <p className="error mt-1">
                  {errors.password && touched.password && errors.password}
                </p>
                  <div className="d-flex justify-content-end mt-4">
                    <Button
                      className="bg-white color-blue border-blue px-4 fw-bold"
                      type="submit" disabled={disable}
                    >
                      Login
                    </Button>
                  </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Login;