import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RecoilRoot } from 'recoil'
import { ConfigProvider, notification } from 'antd'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider notify={notification}
      theme={{
        token: {
          /* here is your global tokens */
          colorPrimary: "#b58e53"
        },
      }}
    >
      <BrowserRouter>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
)
