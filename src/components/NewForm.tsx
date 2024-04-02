import React from 'react';
import styled from 'styled-components';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const FormContainer = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled(Field)`
  width: 100%;
  padding: 8px;
  font-size: 16px;
`;

const Error = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;


const MyForm: React.FC = () => {

    const initialValuesForm = {
        nome: '',
        email: '',
        telefone: '',
        mensagem: '',
    }

    const validationSchema = Yup.object().shape({
        nome: Yup.string().required('Campo obrigatório'),
        email: Yup.string().email('Email inválido').required('Campo obrigatório'),
        telefone: Yup.string().required('Campo obrigatório'),
        mensagem: Yup.string().required('Campo obrigatório'),
    });

    const handleSubmit = async (values: any, { resetForm }: any) => {

        try {
            fetch('https://formsubmit.co/6327524f66b7ee501577aeef1c7844de', {
                method: 'POST',
                headers: {
                    'Content-type': 'Application/json'
                },
                body: JSON.stringify(values)
            })
            console.log("Dados coletados: ", values);
            resetForm();
        } catch (error) {
            console.log("Error: ", error);
        }


    };

    return (
        <Formik
            initialValues={initialValuesForm}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {() => (
                <FormContainer>
                    <Form>
                        <FormGroup>
                            <Label htmlFor="nome">Nome:</Label>
                            <Input type="text" id="nome" name="nome" />
                            <Error name="nome" component="div" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email">Email:</Label>
                            <Input type="email" id="email" name="email" />
                            <Error name="email" component="div" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="telefone">Telefone:</Label>
                            <Input type="text" id="telefone" name="telefone" />
                            <Error name="telefone" component="div" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="mensagem">Mensagem:</Label>
                            <Input ty id="mensagem" name="mensagem" />
                            <Error name="mensagem" component="div" />
                        </FormGroup>
                        <Button type="submit">Enviar</Button>
                    </Form>
                </FormContainer>
            )}
        </Formik>
    );
};

export default MyForm;
