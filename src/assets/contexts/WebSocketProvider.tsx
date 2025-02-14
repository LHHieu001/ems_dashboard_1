import React, { useState, useEffect } from 'react'
import useWebSocket from 'react-use-websocket'
import { createContext } from 'vm'



const WebSocketContext = createContext({});

const WebSocketProvider = () => {
  return (
    <div>WebSocketProvider</div>
  )
}

export default WebSocketProvider