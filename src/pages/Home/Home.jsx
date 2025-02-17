import React from 'react'
import {Link} from "react-router-dom"
import Splash from ""

function App() {
    const [removeSplash, setRemoveSplash]= React.useState(false)
    
    React.useEffect(() =>{
        setTimeout(() => {
            setRemoveSplash(true)
        }, 5000)
    }, [])

  return (
    <>
        {removeSplash == true ? (
            <>
                <section>
                    <h1>Get Started with Logi</h1>
                    <p>Choose your role to continue. Are you signing up as a Rider or as a User</p>
                </section>
                <section>
                    <div>Image</div>
                    <div>
                        <div>Sign up as a Rider</div>
                        <div>Earn money by delivering packages while enjoying the flexibility to work at your convenience. Stay updated with real-time job notifications and take 
                            control of your schedule effortlessly.
                        </div>
                    </div>
                </section>
            </>
        ) : <Splash />}
        
    </>
  )
}