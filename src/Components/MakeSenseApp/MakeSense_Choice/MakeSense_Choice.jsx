import React from 'react'
import { Link } from 'react-router-dom'
import './MakeSense_Choice.scss'

function MakeSense_Choice() {
    return (
        <div className="choiceContainer_container">
            <div className="choice_container">   
                        <div className="box-container">
                            <div className="box-participants firstbox">
                                <Link to="/app/create" className="participants-btn">Participar como <span>_emprendedxr</span></Link>
                                <div className="minibean woman1"></div>
                            </div>
                            <div className="text-box">
                                <p>
                                    Somos una comunidad de ciudadanxs innovadorxs que 
                                    queremos ser protagonistas resolviendo los retos 
                                    socioambientales en México y en el mundo. 
                                </p>
                            </div>
                        </div>

                        <div className="box-container">
                            <div className="box-participants secondbox">
                                <Link className="participants-btn" to="/app/main" >Participar como <span>_ciudadanx</span></Link>
                                <div className="minibean woman2"></div>
                            </div>
                            <div className="text-box">
                                <p>
                                    Somos una comunidad de ciudadanxs innovadorxs que 
                                    queremos ser protagonistas resolviendo los retos 
                                    socioambientales en México y en el mundo. 
                                </p>
                            </div>
                        </div>
            </div> 
            </div>    
    )
}

export default MakeSense_Choice
