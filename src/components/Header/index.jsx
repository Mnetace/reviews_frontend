import React from 'react'
import { Link } from 'react-router-dom'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

import styles from './Header.module.scss'

export const Header = () => {
  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <div>Reviews</div>
          </Link>
          <div className={styles.buttons}>
            <Button variant="contained" color="error">
              Sign out
            </Button>

            <Link to="/login">
              <Button variant="outlined">Sign in</Button>
            </Link>
            <Link to="/register">
              <Button variant="contained">Sign up</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
