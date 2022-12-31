import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from './pages/dashboard/Dashboard.page';

import { Entry } from "./pages/entry/Entry.page";
import { AddTicket } from "./pages/entry/new-ticket/AddTicket.page";
import TicketLists from "./pages/ticket-list/TicketLists.page";
import { Ticket } from "./pages/ticket/Ticket.page";
import { PrivateRoute } from "./components/private-route/PrivateRoute.comp";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Entry />
          </Route>
         
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/add-ticket">
              <AddTicket />
            </PrivateRoute>
            <PrivateRoute path="/tickets">
              <TicketLists />
            </PrivateRoute>
            <PrivateRoute path="/ticket/:tId">
              <Ticket />
            </PrivateRoute>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
