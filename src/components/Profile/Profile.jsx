import React, { useEffect, useContext } from 'react';
import { UserContext } from '../../Context/userContext';

const Profile = () => {
    const { email, getUserProfile, profile, logout, error } = useContext(UserContext);

    // Obtener el perfil del usuario cuando el componente se monta
    useEffect(() => {
        getUserProfile();
    }, []);

    return (
        <div className='container'>
            <div className="card text-center">
                <h5 className="card-header">Profile</h5>
                <div className="card-body">
                    {error && <p className="alert alert-danger">{error}</p>}
                    {profile ? (
                        <>
                            <h5 className="card-title">Email: {email}</h5>
                            <button className="btn btn-success" onClick={logout}>Logout</button>
                        </>
                    ) : (
                        <p>Cargando perfil...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
