import React from 'react'
import { useForm } from 'react-hook-form'

import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'

import styles from './Registration.module.scss'

export const Registration = () => {
  const {
    register,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      avatar_url: ``,
      first_name: 'Maksim',
      last_name: 'Borodin',
      email: 'test@test.ru',
      password: '12345',
    },
    mode: 'onChange',
  })

  return (
    <Paper elevation={0} classes={{ root: styles.root }} mode={'dark'}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Registration
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }}></Avatar>
      </div>
      <form>
        <TextField
          className={styles.field}
          label="First name"
          error={Boolean(errors.first_name?.message)}
          helperText={errors.first_name?.message}
          {...register('first_name', { required: 'Enter your last name' })}
          fullWidth
        />
        <TextField
          className={styles.field}
          label="Last name"
          error={Boolean(errors.last_name?.message)}
          helperText={errors.last_name?.message}
          {...register('last_name', { required: 'Enter your last name' })}
          fullWidth
        />
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
          type="password"
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
          Register
        </Button>
      </form>
    </Paper>
  )
}
