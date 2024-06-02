import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigation from './Navigation'; // Assurez-vous que le chemin est correct

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
}
