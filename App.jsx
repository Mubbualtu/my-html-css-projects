import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import Ac1 from './pages/Ac1';
import Ac2 from './pages/Ac2';
import Ac3 from './pages/Ac3';
import FanPage1 from './pages/FanPage1';
import FanPage2 from './pages/FanPage2';
import FanPage3 from './pages/FanPage3';
import FanPageOff from './pages/FanPageOff';
import HomePage from './pages/HomePage';
import LightOff from './pages/LightOff';
import LightOn from './pages/LightOn';
import LightOn1 from './pages/LightOn1';
import LightOn2 from './pages/LightOn2';
import LightOnColorBlue from './pages/LightOnColorBlue';
import LightOnColorPink from './pages/LightOnColorPink';
import LightOnColorYellow from './pages/LightOnColorYellow';
import LivingRoom from './pages/LivingRoom';
import MenuSlider from './pages/MenuSlider';
import WelcomPage from './pages/WelcomPage';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/Ac1', element: <Ac1 /> },
{ path: '/Ac2', element: <Ac2 /> },
{ path: '/Ac3', element: <Ac3 /> },
{ path: '/FanPage1', element: <FanPage1 /> },
{ path: '/FanPage2', element: <FanPage2 /> },
{ path: '/FanPage3', element: <FanPage3 /> },
{ path: '/FanPageOff', element: <FanPageOff /> },
{ path: '/HomePage', element: <HomePage /> },
{ path: '/LightOff', element: <LightOff /> },
{ path: '/LightOn', element: <LightOn /> },
{ path: '/LightOn1', element: <LightOn1 /> },
{ path: '/LightOn2', element: <LightOn2 /> },
{ path: '/LightOnColorBlue', element: <LightOnColorBlue /> },
{ path: '/LightOnColorPink', element: <LightOnColorPink /> },
{ path: '/LightOnColorYellow', element: <LightOnColorYellow /> },
{ path: '/LivingRoom', element: <LivingRoom /> },
{ path: '/MenuSlider', element: <MenuSlider /> },
{ path: '/WelcomPage', element: <WelcomPage /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}