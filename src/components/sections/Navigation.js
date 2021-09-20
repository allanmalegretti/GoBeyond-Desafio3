import React from 'react'
import './Navigation.css'

const Navigation = () => {
    return (
        <section className="navigation">
            <div className="float">

                <a className="link" target="_blank" rel="noreferrer" href="https://github.com/allanmalegretti/">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="icon" />
                    <span className="text">GitHub</span>
                </a>

                <a className="link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/allan-alegretti/">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="Linkedin" className="icon" />
                    <span className="text">Linkedin</span>
                </a>

                <a className="link" target="_blank" rel="noreferrer" href="https://www.instagram.com/smartcafofo/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJKGs66RRWZgO6ypi9rvdY8FxvJuavnG-fIFP09B-xOcvnBKUNJepRv51OQH8tFPg7Qc&usqp=CAU" alt="Instagram" className="icon" />
                    {/* <img src="https://img-premium.flaticon.com/png/512/739/premium/739193.png?token=exp=1632088811~hmac=be50edd8e8c39f10ff63a382a43c71f3" alt="Instagram" className="icon" /> */}
                    <span className="text">SmartCafofo</span>
                </a>

                <a className="link" target="_blank" rel="noreferrer" href="https://www.instagram.com/allanalegretti/">
                    <img src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png" alt="Instagram" className="icon" />
                    <span className="text">Instagram</span>
                </a>

                <a className="link" target="_blank" rel="noreferrer" href="mailto:allanalegretti@gmail.com">
                    <img src="https://gobeyond.vercel.app/static/media/email.7be6e02d.svg" alt="E-mail" className="icon" />
                    <span className="text">E-mail</span>
                </a>

            </div>
        </section>
    )
}

export default Navigation