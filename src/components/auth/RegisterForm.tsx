import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'

interface RegisterFormData {
    email: string,
    password: string
}

export const RegisterForm: React.FC = (props) => {

    const [ formData, setFormData ] = useState<RegisterFormData>({ email: '', password: ''})

    return (
        <form>
            <TextField variant="outlined" label="Email"/>
            <TextField variant="outlined" label="Password"/>
            <Button variant="outlined">Register</Button>
        </form>
    );
}