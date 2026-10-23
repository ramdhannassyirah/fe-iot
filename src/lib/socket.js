// src/lib/socket.js
import { io } from 'socket.io-client';
import { getAccessToken, refreshAccessToken } from './auth';

export const socket = io(import.meta.env.VITE_API_URL, {
  autoConnect: false, 
  auth: (cb) => cb({ token: getAccessToken() }),
});

let refreshing = false;

const reconnectWithFreshToken = async () => {
  if (refreshing) return;
  refreshing = true;
  try {
    await refreshAccessToken();
    socket.connect();
  } catch {
    // refresh gagal: arahkan ke halaman login
  } finally {
    refreshing = false;
  }
};

socket.on('connect_error', (err) => {
  if (err.message === 'Unauthorized' && !socket.active) reconnectWithFreshToken();
});

socket.on('disconnect', (reason) => {
  if (reason === 'io server disconnect') reconnectWithFreshToken();
});