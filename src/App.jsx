import React from 'react';
import { UIProvider } from './context/UIContext';
import { ThemeProvider } from './context/ThemeContext';
import { AssetsProvider } from './context/AssetsContext';
import { AgentProvider } from './context/AgentContext';
import { ChatProvider } from './context/ChatContext';
import { AuthProvider } from './context/AuthContext';
import { SubscriptionProvider } from './context/SubscriptionContext';
import AppRoutes from './routes/AppRoutes';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import FloatingChat from './components/floating/FloatingChat';
import SplashScreen from './components/splash/SplashScreen';

export default function App(){
  return (
    <ThemeProvider>
      <UIProvider>
        <AuthProvider>
          <AssetsProvider>
            <AgentProvider>
              <ChatProvider>
                <SubscriptionProvider>
                  <Header />
                  <Sidebar />
                  <SplashScreen />
                  <div className="container">
                    <AppRoutes />
                  </div>
                  <FloatingChat />
                </SubscriptionProvider>
              </ChatProvider>
            </AgentProvider>
          </AssetsProvider>
        </AuthProvider>
      </UIProvider>
    </ThemeProvider>
  );
}
