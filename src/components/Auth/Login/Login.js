import React from 'react';
import { Formik, Field } from 'formik';

import Button from '../../../core/Button';
import InputField from '../../../core/InputField';
import StyledLink from '../../../styled/StyledLink';
import StyledForm from '../../../styled/StyledForm';
import { H3, Text } from '../../../core/Typoghraphy';
import FlexWrapper from '../../../styled/FlexWrapper';
import { LoginSchema } from '../../../utils/formSchemas';

export default function Login({history}) {
  const initialValues = {};

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={async (values, actions) => {
        history.push('/onboarding/resume')
      }}
    >
      {({ handleSubmit }) => (
        <StyledForm onSubmit={handleSubmit} data-testid="login-form" marginRight={-120}>
          <H3 weight={500} mb={20}>Account Login</H3>
          <Field name="email" type="email" label="Email Address" placeholder="Enter your email" component={InputField} />
          <Field name="password" type="password" label="Password" placeholder="Enter your password" component={InputField} />

          <FlexWrapper justifyContent="space-between" alignItems="center" marginTop={10}>
            <StyledLink to="/password-reset">Forgot Password?</StyledLink>
            <Button buttonType="primary" type="submit">Log in</Button>
          </FlexWrapper>

          <Text size={14} mt={60}>
            Don't have an account?
            <StyledLink to="/signup" marginleft={10}>Signup here</StyledLink>
          </Text>
        </StyledForm>
      )}
    </Formik>
  )
}
