import React, { useState } from "react";
import {
  FormColumn,
  FormWrapper,
  FormInput,
  FormSection,
  FormRow,
  FormTitle,
  FormLabel,
  FormInputRow,
  FormButton,
  FormMessage,
} from "./FormStyle";
import { Container } from "../../globalStyle";
import validateForm from "./validateForm";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultError = validateForm({ name, email, subject, message });

    if (resultError !== null) {
      setError(resultError);
      return;
    }
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setError(null);
    setSuccess("Message was sent!");
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  const formData = [
    {
      label: "Name",
      value: name,
      onChange: (e) => setName(e.target.value),
      type: "text",
    },
    {
      label: "Email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      type: "email",
    },
    {
      label: "Subject",
      value: subject,
      onChange: (e) => setSubject(e.target.value),
    },
    {
      label: "Message",
      value: message,
      onChange: (e) => setMessage(e.target.value),
    },
  ];

  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn>
            <FormTitle>Let's talk</FormTitle>
            <FormWrapper
              onSubmit={handleSubmit}
              name="contact-form"
              method="POST"
              action="contact/?success=true"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact-form" />
              {formData.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label} *</FormLabel>
                  <FormInput
                    type={el.type}
                    value={el.value}
                    onChange={el.onChange}
                  />
                </FormInputRow>
              ))}

              <FormButton type="submit">Send</FormButton>
            </FormWrapper>
            {error && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
                error
              >
                {error}
              </FormMessage>
            )}
            {success && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
              >
                {success}
              </FormMessage>
            )}
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );
};

export default Form;
