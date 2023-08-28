// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'
import BadgeLayout from './layouts/BadgeLayout/BadgeLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={ScaffoldLayout} title="Partners" titleTo="partners" buttonLabel="New Partner" buttonTo="newPartner">
        <Route path="/partners/new" page={PartnerNewPartnerPage} name="newPartner" />
        <Route path="/partners/{id:Int}/edit" page={PartnerEditPartnerPage} name="editPartner" />
        <Route path="/partners" page={PartnerPartnersPage} name="partners" />
      </Set>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={BadgeLayout}>
        <Route path="/share" page={SharePage} name="share" />
        <Route path="/customize" page={CustomizeTicketPage} name="customizeTicket" />
        <Route path="/" page={HomePage} name="home" />
        <Route path="/{slug:String}" page={HomePage} name="partner" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
