import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'; // Your Firebase config

function AuthStatus() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe(); // Clean up listener on unmount
  }, []);

  return (
    <div>
      {user ? <p>User is logged in</p> : <p>User is not logged in</p>}
    </div>
  );
}

export default AuthStatus;