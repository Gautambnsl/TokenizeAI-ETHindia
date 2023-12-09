import {
  AnonAadhaarProof,
  LogInWithAnonAadhaar,
  useAnonAadhaar,
} from 'anon-aadhaar-react';
import React, { useEffect } from 'react';

const LoginButton = () => {
  const [anonAadhaar] = useAnonAadhaar();

  useEffect(() => {
    console.log('Anon Aadhaar status: ', anonAadhaar.status);
  }, [anonAadhaar]);
  return (
    <>
      <div>
        <LogInWithAnonAadhaar />
      </div>
    </>
  );
};

export default LoginButton;
