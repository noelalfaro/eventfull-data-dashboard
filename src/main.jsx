import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailView from './routes/DetailView';
import Layout from './routes/Layout';
import AboutDetail from './Components/AboutDetail';
import NotFound from './routes/NotFound';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index={false} element={<Layout />}>
            <Route index={true} element={<App />} />
            <Route index={false} path="/eventDetails/:id" element={<DetailView />} />
            <Route index={false} path="/about" element={<AboutDetail />} />
          </Route>
        </Route>

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
