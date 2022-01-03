import axios from 'axios';
import React from 'react';
import useDebounce from './components/useDebounce';
import './App.css';
import Form from './components/Form';
import Profile from './components/Profile';

const App = () => {
    const [value, setValue] = React.useState('');
    const [profile, setProfile] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const debouncedSearch = useDebounce(value, 750);

    const getProfile = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.get(`https://api.github.com/users/${value}`);
            setProfile(data);
            setIsLoading(false);
        } catch (error) {
            alert(`Пользователь ${value} не найден`);
            setIsLoading(false);
        }
    };

    const checkValue = () => {
        if (value.trim() !== '') {
            getProfile();
        } else {
            setValue('');
            alert('Поле поиска не должно быть пустым');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        checkValue();
    };

    React.useEffect(() => {
        if (debouncedSearch) {
            checkValue();
        }
    }, [debouncedSearch]);

    return (
        <div id="app">
            <div className="app-container">
                <Form
                    value={value}
                    setValue={setValue}
                    handleSubmit={handleSubmit}
                    isLoading={isLoading}
                />
                {profile.login && <Profile profile={profile} />}
            </div>
        </div>
    );
};

export default App;
