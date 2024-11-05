import React, { useEffect, useState } from 'react';

const VerifyToken = () => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const verifyToken = async () => {
            try {
                const response = await fetch('api/auth/verify', {
                    method: 'GET',
                    credentials: 'include', 
                });

                const result = await response.json();
                console.log('Token verification result:', result);

                if (result.success===true) {
                    setUserData(result.user);
                    console.log('User data:', result.user);
                } else {
                    setError('Token verification failed.');
                }
            } catch (error) {
                console.error('Error during token verification:', error);
                setError('An error occurred during token verification.');
            }
        };

        verifyToken();
    }, []);
                  
    return (
        <div>
            {userData ? (
                <div>
                    <p>Welcome, {userData.name}</p>
                    <p>Email: {userData.email}</p>
                    <div>
                        {Object.keys(userData).map((key) => (
                            <p key={key}>
                                <strong>{key}:</strong> {userData[key]}
                            </p>
                        ))}
                    </div>
                </div>
            ) : (
                <p>{error ? error : 'Verifying token...'}</p>
            )}
        </div>
    );
};

export default VerifyToken;
