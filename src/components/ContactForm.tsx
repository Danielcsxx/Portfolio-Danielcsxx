import React from "react";
import styled from "styled-components";
import { useForm } from "@formspree/react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from 'yup';
import { FaEnvelope, FaUserAlt, FaPhone, FaComment, FaPaperPlane } from "react-icons/fa";
import { toast } from 'react-toastify';


interface FormValues {
    [key: string]: string,
    nome: string,
    email: string,
    telefone: string,
    mensagem: string,
}

const ContactFormMain = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 500px;
    padding: 12px;
    background-color: #303030;
    border: 2px solid #FFF;
    border-radius: 8px;
    margin-top: 102px;
    border: 2px solid #F0FF0;
    box-shadow: 0 0 102px 14px #152ae6;


    @media (max-width: 1000px) {
        width: 100%;
        padding: 0px;,
        margin-top: 10px;
    }
`;

const ContactFormDivMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px;
`;

const ContactFormLabel = styled.label`
    margin-bottom: 6px;
`;

const ContactFormDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const ContactFormInput = styled(Field)`
    width: 100%;
    padding: 12px;
    color: #FFF;
    background-color: #292929;
    border-radius: 4px;
    border: none;
    padding-left: 40px;
    font-weight: bold;
    font-family: unset; 
    transition: .6s border; 
`;

const ContactFormMsg = styled(Field)`
    width: 100%;
    padding: 12px;
    padding-left: 44px;
    color: #FFF;
    background-color: #292929;
    border: none;
    border-radius: 8px;
`;

const ContactFormIcon = styled.div`
    position: absolute;
    align-items: center;
    color: #9E9E9E;   
    margin: 8px 8px;
`;

const ContactFormBtnDiv = styled.div`
    cursor: pointer;
    width: 100%;
    padding: 8px;
`;

const ContactFormSendIcon = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 6px;
`;

const ContactFormBtn = styled.button`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 8px;
    font-family: unset; 
    font-size: 18px; 
    font-weight: 600;
    letter-spacing: 1.2px;
    color: #FFF;   
    background-color: #515151;
    border: transparent;
    border-radius: 4px;
    border: 2px solid #FFF;
    cursor: pointer;
    transition: all .6s;

    &:hover{
        background-color: #041079;
        color: #FFF;
        border: 2px solid #FFF;
    }
`;

const ContactFormErrors = styled(ErrorMessage)`
    color: red;
    font-size: 14px;
    margin-top: 4px;
`;

const ContactForm: React.FC = () => {
    const [, handleSubmit] = useForm("mvoewzyg");

    const initialValues: FormValues = {
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
    };

    const validationSchema = Yup.object({
        nome: Yup.string()
            .required('O nome é obrigatório'),
        email: Yup.string().email('Endereço de email inválido!')
            .required('O email é obrigatório'),
        telefone: Yup.string()
            .required('O telefone é obrigatório'),
        mensagem: Yup.string()
            .max(200, 'A mensagem não pode ultrapassar 200 caracteres')
            .required('A mensagem é obrigatória')
    });

    const sendForm = async (values: FormValues, helpers: FormikHelpers<FormValues>) => {
        try {
            await handleSubmit(values);
            toast.success("Mensagem enviada com sucesso!");
            helpers.resetForm();
        } catch (error) {
            console.log("Erro no envio da mensagem: ", error);
            toast.error("Falha no envio da mensagem.");
        }
    };

    return (

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={sendForm}
        >
            <ContactFormMain>
                <ContactFormDivMain>
                    <ContactFormLabel>{"Nome"}</ContactFormLabel>
                    <ContactFormDiv>
                        <ContactFormIcon>
                            <FaUserAlt size={20} />
                        </ContactFormIcon>
                        <ContactFormInput placeholder="Nome" maxLength={18} name="nome" type="text" />
                    </ContactFormDiv>
                    <ContactFormErrors name="nome" component="span" />
                </ContactFormDivMain>
                <ContactFormDivMain>
                    <ContactFormLabel>{"Email"}</ContactFormLabel>
                    <ContactFormDiv>
                        <ContactFormIcon>
                            <FaEnvelope size={20} />
                        </ContactFormIcon>
                        <ContactFormInput placeholder="Email" maxLength={42} name="email" type="email" />
                    </ContactFormDiv>
                    <ContactFormErrors name="email" component="span" />
                </ContactFormDivMain>
                <ContactFormDivMain>
                    <ContactFormLabel>{"Telefone"}</ContactFormLabel>
                    <ContactFormDiv>
                        <ContactFormIcon>
                            <FaPhone size={20} />
                        </ContactFormIcon>
                        <ContactFormInput placeholder="Telefone" maxLength={14} name="telefone" type="phone" />
                    </ContactFormDiv>
                    <ContactFormErrors name="telefone" component="span" />
                </ContactFormDivMain>
                <ContactFormDivMain>
                    <ContactFormLabel>{"Mensagem"}</ContactFormLabel>
                    <ContactFormDiv>
                        <ContactFormIcon>
                            <FaComment size={20} name={"mensagem"} />
                        </ContactFormIcon>
                        <ContactFormMsg placeholder="Mensagem" maxLength={300} name="mensagem" type="text" />
                    </ContactFormDiv>
                    <ContactFormErrors name="mensagem" component="span" />
                </ContactFormDivMain>
                <ContactFormBtnDiv>
                    <ContactFormBtn type={"submit"}>
                        {"Enviar"}
                        <ContactFormSendIcon>
                            <FaPaperPlane size={22} />
                        </ContactFormSendIcon>
                    </ContactFormBtn>
                </ContactFormBtnDiv>
            </ContactFormMain>
        </Formik >
    )
}

export default ContactForm;