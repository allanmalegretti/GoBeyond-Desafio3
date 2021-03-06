import React, { useState } from 'react'
import Posts from './Posts'
import '../sections/Posts'

import './Tabs.css'

const Tabs = () => {
    const [button, setButton] = useState(0)
    const [active0, setActive0] = useState('tab-active')
    const [active1, setActive1] = useState('tab')
    const [active2, setActive2] = useState('tab')
    // const [active3, setActive3] = useState('tab')
    
    const buttonHandler0 = () => {
        setButton(0)
        setActive0('tab-active')
        setActive1('tab')
        setActive2('tab')
        // setActive3('tab')
    }
    const buttonHandler1 = () => {
        setButton(1)
        setActive0('tab')
        setActive1('tab-active')
        setActive2('tab')
        // setActive3('tab')
    }
    const buttonHandler2 = () => {
        setButton(2)
        setActive0('tab')
        setActive1('tab')
        setActive2('tab-active')
        // setActive3('tab')
    }
    // const buttonHandler3 = () => {
    //     setButton(3)
    //     setActive0('tab')
    //     setActive1('tab')
    //     setActive2('tab')
    //     setActive2('tab-active')
    // }

    return (
        <>
            <nav className="tabs">
                
                <button className={active0} onClick={buttonHandler0}>{`📚 Programing Languages`}</button>
                <button className={active1} onClick={buttonHandler1}>{`🏡 Indoor Activities`}</button>
                <button className={active2} onClick={buttonHandler2}>{`🌄 Outdoor Activities`}</button>
                {/* <button className={active3} onClick={buttonHandler3}>{`📚 Smart Home`}</button> */}

            </nav>
            <Posts number={button} />
        </>

    )
}

export default Tabs