import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Loading from './components/loading/Loading';

const socket = io('http://localhost:4000');

function App() {
  const [isLoading, setLoadingState] = useState<boolean>(!socket.connected)
  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const [lastPong, setLastPong] = useState<null | number>(null);
  console.log(socket)
  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
      setLoadingState(false);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
      setLoadingState(true);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
    };
  }, []);

  const sendPing = () => {
    socket.emit('ping');
  }
  console.log(isLoading)
  return (
    <div>
      <p>Connected: {'' + isConnected}</p>
      <p>Last pong: {lastPong || '-'}</p>
      <button onClick={sendPing}>Send ping</button>
      {isLoading ? <Loading></Loading> : null}
    </div>
  );
}

export default App;
