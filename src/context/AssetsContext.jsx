import { createContext, useContext, useState } from 'react';
const AssetsContext = createContext();
export const useAssets = () => useContext(AssetsContext);
export function AssetsProvider({ children }) {
  const [assets, setAssets] = useState({
    logo: "/neuroedge-logo.png",
    splash: "/splash.png",
    icon: "/icons/icon-192.png",
    founder: { name: "Joseph Were", email: "josephogwe8@gmail.com", phone: "+254712562780" }
  });
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [recordings, setRecordings] = useState([]);
  const updateAsset = (key, value) => setAssets(prev => ({ ...prev, [key]: value }));
  return <AssetsContext.Provider value={{ assets, updateAsset, uploadedFiles, setUploadedFiles, recordings, setRecordings }}>{children}</AssetsContext.Provider>
}
