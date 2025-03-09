import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Styled components for chat bubbles with tails
const Bubble = styled(Box)(({ theme, isUser }) => ({
  maxWidth: '70%',
  padding: theme.spacing(1.5),
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(1),
  position: 'relative',
  backgroundColor: isUser ? '#DCF8C6' : '#E5E5EA', // User: light green, Other: light gray
  alignSelf: isUser ? 'flex-end' : 'flex-start',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    borderWidth: theme.spacing(1),
    borderStyle: 'solid',
  },
  ...(isUser
    ? {
        '&:after': {
          right: '-10px',
          borderLeftColor: '#DCF8C6',
          borderBottomColor: 'transparent',
          borderRightColor: 'transparent',
          borderTopColor: 'transparent',
        },
      }
    : {
        '&:after': {
          left: '-10px',
          borderRightColor: '#E5E5EA',
          borderBottomColor: 'transparent',
          borderLeftColor: 'transparent',
          borderTopColor: 'transparent',
        },
      }),
}));

const MessageList = ({ messages }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
        overflowY: 'auto',
        height: '400px', // or whatever height you need
      }}
    >
      {messages.map((message, index) => (
        <Bubble key={index} isUser={index % 2 !== 0}>
          <Typography variant="body1">{message}</Typography>
        </Bubble>
      ))}
    </Box>
  );
};

export default MessageList;