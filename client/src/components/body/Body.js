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


import CreateAssignment from '../assignment/CreateAssignment'
import GetAllAssignements from '../assignment/GetAllAssignments'
import EditAssignment from '../assignment/EditAssignment'

import CreateMarking from '../markings/CreateMarking'
import GetMarkings from '../markings/GetMarkings'

import CreateDownloads from '../downloads/CreateDownloads'
import GetDownloads from '../downloads/GetDownloads'
import StudentHome from '../Student/secHome'
import StdRegister from '../Student/register'
import STDLogin from '../Student/login'
import {useSelector} from 'react-redux'
import STDprofile from '../Student/stdprofile'
export default function Body() {

const auth = useSelector(state => state.auth)
const {isLogged, isAdmin, isSuper,isCoSuper, isPanel,isSTD} = auth


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


            <Route path='/createassi' component={isAdmin ? CreateAssignment : NotFound} exact/>
            <Route path='/getallassi' component={isAdmin ? GetAllAssignements : NotFound} exact/>
            <Route path='/editassi/:id' component={isAdmin ? EditAssignment : NotFound} exact/>

            <Route path='/createmarking' component={isAdmin ? CreateMarking : NotFound} exact/>
            <Route path='/getmarkings' component={isAdmin ? GetMarkings : NotFound} exact/>

            <Route path='/createdownloads' component={isAdmin ? CreateDownloads : NotFound} exact/>
            <Route path='/getdownloads' component={isAdmin ? GetDownloads : NotFound} exact/>
            <Route path='/Student-Home' component={StudentHome} exact />
            <Route path='/stdreg' component={StdRegister} exact/>
            <Route path='/stdlogin' component={isSTD ? StudentHome: STDLogin} exact/>
            <Route path='/stdprofile' component={isSTD ? STDprofile: STDLogin} exact/>
             
        </Switch>




    </section>
  
  )
}

