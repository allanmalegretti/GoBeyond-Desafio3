import React from 'react'
import './Profile.css'

const Profile = () => {
    return (
        <section className="profile">
            <div className="profile-background"></div>
            <img src="https://github.com/allanmalegretti.png" alt="profile" className="picture" />
            <h1 className="name">Allan Maroder Alegretti</h1>
            <h2 className="description">Control and Automation Engineer</h2>
            <h2 className="description">Fullstack Student</h2>
        </section>
    )
}

export default Profile