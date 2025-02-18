import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Layout } from './Layout'
import { BrowserRouter } from 'react-router-dom'

/* import { createBrowserRouter,
    RouterProvider,
 } from 'react-router-dom' */

 /* const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        
        },

{
path: '/generate',
element: <QrCodeGenerator />,

},

{
    path: '/scan',
    element: <QrcodeScaner />,
    
    },


 ]); */
 
createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Layout />
 </BrowserRouter>

)
