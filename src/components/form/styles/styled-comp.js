import styled from "styled-components";

const ContainerForm = styled.section`
  height: 100vh;
  width: 100%;
  background-color: #fff;
  z-index: 12;
  position: absolute;
  overflow: none;
`;

const RowLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;

  flex-direction: column;
`;

const Input = styled.input`
  width: 24rem;

  padding: 1rem 1.5rem;
  border-radius: 7px;
`;

const Submit = styled.button`
  width: 24rem;
  height: 4rem;
  border-radius: 7px;

  border-bottom: 0.4rem solid #1394cf;
`;

export { RowLogin, Input, Form, Submit, ContainerForm };
