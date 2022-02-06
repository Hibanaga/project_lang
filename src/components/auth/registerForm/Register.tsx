import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import RegisterPresentation from "./RegisterPresentation";
import { Redirect } from "react-router-dom";
import { confirm } from "../../../router/routes";
import { ContextForm } from "../ContextForm";
import instance from "../../../service/AppService";
import { connect } from "react-redux";

interface IRegisterProps {
  profile:any
}

const Register = ({profile}:IRegisterProps) => {
  const [state, dispatch] = useContext(ContextForm);
  const [isAlreadyExist, setAlreadyExist] = useState("not exist");
  const { register } = state;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    if (name === "email") {
      dispatch({ type: "change_email__register", payload: value });
    }

    if (name === "password") {
      dispatch({ type: "change_password__register", payload: value });
    }

    if (name === "nickname") {
      dispatch({ type: "change_nickname__register", payload: value });
    }
  };

  const submitFormHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    instance
      .registerUser({ ...register, clientID: uuidv4() })
      .then((data) => data !== undefined && setAlreadyExist("success added"));
  };

  return (
    <>
      {isAlreadyExist === "success added" && <Redirect to={confirm} />}
      <RegisterPresentation
        state={register}
        isAlreadyExist={isAlreadyExist}
        onHandleInputChange={handleInputChange}
        onSubmitFormHandler={submitFormHandler}
      />
    </>
  );
}

const mapStateToProps = (state: any) => ({
  profile: state.profile,
});

export default connect(mapStateToProps,null)(Register);
