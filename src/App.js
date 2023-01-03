import "./App.css";
import { Dashboard } from "./pages/dashboard/Dashboard.page";
import { Entry } from "./pages/entry/EntryPage";
import { AddTicket } from "./pages/new-ticket/AddTicket.page";
import { TicketLists } from "./pages/ticket-listing/TicketLists.page";
import { Ticket } from "./pages/ticket/Ticket.page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components/private-route/PrivateRoute.comp";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Fragment } from "react";
function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Routes>
            <Route path="/" element={<Entry />} />
            <Route element={<PrivateRoute />}>
              <Route
                path="/dashboard"
                element={
                  <DefaultLayout>
                    <Dashboard />
                  </DefaultLayout>
                }
              />
              <Route
                path="/add-ticket"
                element={
                  <DefaultLayout>
                    <AddTicket />
                  </DefaultLayout>
                }
              />
              <Route
                path="/tickets"
                element={
                  <DefaultLayout>
                    <TicketLists />
                  </DefaultLayout>
                }
              />
              <Route
                path="/ticket/:tId"
                element={
                  <DefaultLayout>
                    <Ticket />
                  </DefaultLayout>
                }
              />
            </Route>
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
