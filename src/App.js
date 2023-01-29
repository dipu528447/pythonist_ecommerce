
import './App.css';
import { createContext, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import { router } from './Router/Route';


export const UserContext =createContext();
export const LoadingContext=createContext();
export const CartContext=createContext();

function App() {
  const [user,setUser]=useState("")
  const [cart,setCart]=useState([]);
  const [loading,setLoading]=useState(true);  
  return (
    
    <UserContext.Provider value={[user,setUser]}>      
        <LoadingContext.Provider value={[loading,setLoading]}>
          <CartContext.Provider value={[cart,setCart]}>
            <div className="App">
              <RouterProvider router={router}>
                <Main></Main>                
              </RouterProvider>
            </div>
          </CartContext.Provider>
        </LoadingContext.Provider>
    </UserContext.Provider>
    
  );
}
export default App;
