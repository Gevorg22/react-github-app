import React from 'react';

const Profile = ({ profile }) => {
    return (
        <div className="app-user">
            <div className="app-user_info">
                <div className="app-user_image">
                    <img src={profile.avatar_url} width={100} height={100} alt="avatar" />
                </div>
                <div className="app-user_data">
                    <h1 className="app-user_name">
                        {profile.name}
                        <span>@{profile.login}</span>
                    </h1>
                    <p className="app-user_about">{profile.bio}</p>
                </div>
            </div>
            <ul className="app-user_stats">
                <li className="app-user_stats-item">
                    Репозитории
                    <span>{profile.public_repos}</span>
                </li>
                <li className="app-user_stats-item">
                    Подписчиков
                    <span>{profile.followers}</span>
                </li>
                <li className="app-user_stats-item">
                    Подписок
                    <span>{profile.following}</span>
                </li>
            </ul>
            <ul className="app-user_location">
                <li className="app-user_location-item">{profile.location}</li>
                <li className="app-user_location-item">
                    <a href={profile.html_url}>{profile.html_url}</a>
                </li>
            </ul>
        </div>
    );
};

export default Profile;
