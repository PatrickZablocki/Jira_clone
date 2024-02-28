import { useState, useEffect } from 'react';
import styles from '../Profile/Profile.module.css';
import axios from 'axios';

const Profile = () => {
const [user, setUser] = useState(null);

useEffect(() => {
    const fetchUserData = async () => {
        try {
            const response = await axios.get('/DB.json'); 
            const userData = response.data.users.find(user => user.username === 'user1');
            setUser(userData);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
    };

    fetchUserData();
}, []);

return (
    <div>
        {user && (
        <div>
            <img className={styles.profileImage} src={user.profilePictureUrl} alt="Profilbild" />
        </div>
        )}
    </div>
    );
};

export default Profile;