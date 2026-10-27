import React, { lazy, Suspense, useState } from 'react';
import Agreement from './components/specials/agreement';

const LandingPage = lazy(() => import("./pages/landing") ); 

export default function App() {
  const [agree, setAgree] = useState(false);

  if(!agree) 
    return <Agreement onAgree={()=> setAgree(true)}/>
  return <LandingPage/>;
}
