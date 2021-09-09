import styled from "styled-components";

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
`;

export { RowLogin, Input, Form, Submit };
