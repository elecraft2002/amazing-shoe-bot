import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import io from 'socket.io-client';
import Loading from './components/loading/Loading';
import Nav from './components/nav/Nav';
import Home from './Pages/Home/Home';
import ShoesPage from './Pages/shoes/ShoesPage';

const socket = io('http://localhost:4000');

function App() {
  const [isLoading, setLoadingState] = useState<boolean>(!socket.connected)
  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
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

  console.log(isLoading)
  return (
    <>
      <Nav isConnected={isConnected} id={socket.id} />
      <p>Connected: {'' + isConnected}</p>
      {isLoading ? <Loading></Loading> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shoes" element={<ShoesPage socket={socket} setLoadingState={setLoadingState} />} />
      </Routes>
    </>

  );
}

export default App;
