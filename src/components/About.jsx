import React from 'react'

const About = () => {
    return (
        <div className="container mt-4">
            <table className="table table-borderless h4 rounded">
                <thead>
                    <tr>
                        <td colSpan="2" style={{color: "tomato", fontSize: "38px", textAlign: "center", fontWeight: "bold"}}>About</td>
                    </tr>
                    <tr className="text-light bg-dark">
                        <td className="text-left">Developer</td>
                        <td className="text-right">Sajjat Hossain</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="font-weight-bold">
                        <td className="text-left text-success">App Name</td>
                        <td className="text-right">Yum-Yum</td>
                    </tr>
                    <tr className="font-weight-bold">
                        <td className="text-left text-success">Purpose</td>
                        <td className="text-right">Recipe Library</td>
                    </tr>
                    <tr className="font-weight-bold">
                        <td className="text-left text-success">Published on</td>
                        <td className="text-right">Wed, 10 February, 2021</td>
                    </tr>
                    <tr className="font-weight-bold">
                        <td className="text-left text-success">Portfolio</td>
                        <td className="text-right"><a href="https://sajjathossain.github.io/Portfolio/" style={{textDecoration: 'none', color: "tomato"}} target="_blank">Visit Page!</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default About
