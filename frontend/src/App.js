import "./App.css";
import { DefaultLayout } from "./layout/DefaultLayout";
// import Dashboard from "./pages/dashboard/Dashboard.page";

// import { Entry } from "./pages/entry/Entry.page";
// import { AddTicket } from "./pages/entry/new-ticket/AddTicket.page";
import TicketLists from "./pages/ticket-list/TicketLists.page";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        <TicketLists />
      </DefaultLayout>
    </div>
  );
}

export default App;
