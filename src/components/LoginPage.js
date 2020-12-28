import React from 'react'
import {connect} from 'react-redux'
import {startLogin} from '../actions/auth' 
import {startLogin2} from '../actions/auth'

export const LoginPage = ({startLogin,startLogin2})=>
    (
        <div className="box-layout">
        <h2 className="blacks">Black Lives Matter</h2>
        <div className="box-layout__box">
            <h1 className=".box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control !</p>
            <button className="button" onClick={startLogin}>Login with Google</button>
            <p> </p>
            <button className="button" onClick={startLogin2}>Login with Github</button>

        </div>
        
        <p className="credentials"> Developed by Durga Saketh</p>
        </div>
    )


const mapDispatchToProps = (dispatch) =>({
    startLogin:()=> dispatch(startLogin()),
    startLogin2:()=> dispatch(startLogin2())
    
})

export default connect(undefined,mapDispatchToProps)(LoginPage)