import React from 'react'
import AuthPageLayout from '../../components/auth/AuthPageLayout'
import SignUpForm from '../../components/auth/SignUpFrom'

const SignUp = () => {
  return (
    <AuthPageLayout>
        <SignUpForm/>
    </AuthPageLayout>
  )
}

export default SignUp