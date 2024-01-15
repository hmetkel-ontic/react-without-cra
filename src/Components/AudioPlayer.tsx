import React from 'react'

import { Typography, Container, Paper } from '@mui/material'

const AudioPlayer = () => {
  return (
    <Container>
      <Typography variant='h3' component={'h1'} color={'primary'} textAlign={'center'} >
        Audio Player
      </Typography>
      <Paper elevation={2}>hello</Paper>
    </Container>
  )
}

export default AudioPlayer;