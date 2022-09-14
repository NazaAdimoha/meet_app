import React from 'react';
import Navbar from './components/Navbar';
import  {auth}  from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Chat from './components/Chat';



const style = {
  appContainer: `max-w-[768px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`
}

function App() {
  const user = useAuthState(auth);
  // console.log(user);
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}> 
        {/* NAvbar */}
        <Navbar />
        {user ? <Chat /> : null}
        {/* chat section */}
        <Chat />
        
      </section>
    </div>
  );
}

export default App;
