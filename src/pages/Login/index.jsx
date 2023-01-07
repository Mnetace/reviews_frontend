import React from 'react'

import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { useForm } from 'react-hook-form'

import styles from './Login.module.scss'

export const Login = () => {
  const {
    register,

    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: 'test@test.ru',
      password: '12345',
    },
    mode: 'onChange',
  })

  return (
    <Paper elevation={0} classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Sign in Reviews
      </Typography>
      <form>
        <TextField
          className={styles.field}
          label="E-Mail"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          type="email"
          {...register('email', { required: 'Enter your email' })}
          fullWidth
        />
        <TextField
          className={styles.field}
          label="Password"
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register('password', { required: 'Enter your password' })}
          fullWidth
        />
        <Button
          disabled={!isValid}
          type="submit"
          size="large"
          variant="contained"
          fullWidth
        >
          Sign in
        </Button>
      </form>
    </Paper>
  )
}
