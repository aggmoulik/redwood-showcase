// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'
import ProjectsLayout from 'src/layouts/ProjectsLayout'
import DefaultLayout from 'src/layouts/DefaultLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ProjectsLayout}>
        <Private unauthenticated="login">
          <Route path="/projects/new" page={ProjectNewProjectPage} name="newProject" />
          <Route path="/projects/{id:Int}/edit" page={ProjectEditProjectPage} name="editProject" />
        </Private>

        <Route path="/projects/{id:Int}" page={ProjectProjectPage} name="project" />
        <Route path="/projects" page={ProjectProjectsPage} name="projects" />
      </Set>
      <Set wrap={DefaultLayout}>
        <Route path="/" page={LandingPage} name="landing" />
        <Route notfound page={NotFoundPage} />
        <Route path="/login" page={LoginPage} name="login" />
      </Set>
    </Router>
  )
}

export default Routes
