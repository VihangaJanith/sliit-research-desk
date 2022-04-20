import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import ActivationEmail from './auth/ActivationEmail'

import NotFound from '../utils/NotFound/NotFound'
import ForgotPassword from '../body/auth/ForgotPassword'
import ResetPassword from '../body/auth/ResetPassword'
import Profile from '../body/profile/Profile'
import EditUser from '../body/profile/EditUser'
import Home from '../Home'
import Super from '../Super'
import Panel from '../body/panel/Panel'
import PanelEdit from '../body/panel/PanelEdit'
import Panelexp from '../body/panel/Panelexp'


import {useSelector} from 'react-redux'

export default function Body() {

const auth = useSelector(state => state.auth)
const {isLogged, isAdmin, isSuper,isCoSuper, isPanel} = auth


  return (

      

    
    <section>
        <Switch>
            <Route path='/login' component={isLogged ? NotFound: Login} exact />
            <Route path='/register' component={isLogged ? NotFound: Register} exact/>
            <Route path='/forgot_password' component={isLogged ? NotFound: ForgotPassword} exact/>
            <Route path='/user/reset/:token' component={isLogged ? NotFound: ResetPassword} exact/>
            <Route path='/user/activate/:activation_token' component={ActivationEmail} exact/>
            <Route path='/profile' component={isLogged ? Profile: NotFound} exact/>
            <Route path='/edit_user/:id' component={isAdmin ? EditUser: NotFound} exact/>
            <Route path='/' component={isLogged ? Home: Login} exact/>
            <Route path='/super' component={isSuper || isAdmin || isCoSuper ? Super : NotFound} exact/>
            <Route path='/panel' component={isAdmin ? Panel : NotFound} exact/>
            <Route path='/panelexp' component={isAdmin ? Panelexp : NotFound} exact/>

            <Route path='/panel_edit/:id' component={isAdmin ? PanelEdit : NotFound} exact/>


           
            
             
        </Switch>




    </section>
  
  )
}

