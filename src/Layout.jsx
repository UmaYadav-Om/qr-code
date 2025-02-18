import { Navigation } from './components/Navigation/Navigation'
import { QrCodeGenerator } from './components/Generate/QrCodeGenerator'
import { QrcodeScaner } from './components/Scan/QrcodeScaner'
import { Routes, Route } from 'react-router-dom'
import { GenerateHistory } from './components/GenerateHistory'
import { ScanHistory } from './components/ScanHistory'

const Layout = () => {
   return (
   <div>
<Navigation />

<Routes>
<Route path='/generate' element={<QrCodeGenerator />} />
<Route path='/scan' element={<QrcodeScaner />} />
<Route path='/scanHistory' element={<ScanHistory />} />
<Route path='/generateHistory' element={<GenerateHistory />} />


</Routes>



   </div>
   );
};

export { Layout };
