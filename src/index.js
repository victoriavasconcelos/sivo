import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Projetos from './pages/projetos';
import Main from './pages/main';
import CriarProjeto from './pages/criar-projeto';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Perfil from './pages/perfil';
import Home from './pages/home';
import DetalhesProjeto from './pages/detalhes-projeto';
import Login from './pages/login';
import Cadastro from './pages/cadastro';

const theme = createTheme({
  palette: {
    mode: "dark"
  }
})
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/projetos",
        element: <Projetos />
      },
      {
        path: "/criar-projeto",
        element: <CriarProjeto />
      },
      {
        path: "/perfil",
        element: <Perfil />
      },
      {
        path: "/detalhes-projeto",
        element: <DetalhesProjeto />
      },
    ]
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/cadastro",
    element: <Cadastro/>
  },
  {
    path: "/app",
    element: <App />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
