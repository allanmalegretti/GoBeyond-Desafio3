import React from 'react'
import './App.css'
import Profile from './components/sections/Profile'
import Navigation from './components/sections/Navigation'
import Tabs from './components/sections/Tabs'

const App = () => {
    return (
        <main className="main">
            <Profile />
            <Navigation />
            <Tabs />
        </main>
    )
}

export default App