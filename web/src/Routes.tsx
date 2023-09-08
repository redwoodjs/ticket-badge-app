// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'

import { useAuth } from './auth'
import AdminLayout from './layouts/AdminLayout/AdminLayout'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import BadgeLayout from './layouts/BadgeLayout/BadgeLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/twitter" page={TwitterPage} name="twitter" />
      <Route path="/og/{id:Int}" page={OgImagePage} name="ogImage" />
      <Route path="/download/{id:Int}" page={DownloadPage} name="download" />
      <Private unauthenticated="login">
        <Set wrap={AdminLayout}>
          <Route path="/admin/speakers" page={AdminSpeakersPage} name="speakers" />
          <Route path="/admin/dashboard" page={AdminDashboardPage} name="dashboard" />
          <Route path="/admin/partners" page={AdminPartnersPage} name="partners" />
          <Route path="/admin/users" page={AdminUsersPage} name="users" />
        </Set>
      </Private>
      <Set wrap={AuthLayout}>
        <Route path="/login" page={AuthLoginPage} name="login" />
        <Route path="/signup" page={AuthSignupPage} name="signup" />
        <Route path="/forgot-password" page={AuthForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={AuthResetPasswordPage} name="resetPassword" />
      </Set>
      <Set wrap={BadgeLayout}>
        <Route path="/invite/{id:Int}" page={InvitePage} name="invite" />
        <Route path="/customize" page={CustomizeTicketPage} name="customizeTicket" />
        <Route path="/{slug:String}" page={HomePage} name="partner" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
