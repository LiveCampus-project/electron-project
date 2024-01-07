// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.
import {
  getAllEvents,
  getEventById,
  createEvent,
  deleteEvent,
  getEventsByDate,
  updateEvent,
} from "./utils/utils";
import { Calendar } from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

(async () => {
  async function fetchEvent(month: number, year: number) {
    let Events = await getEventsByDate(`${month + 1}`, `${year}`).then(
      (res) => res
    );
    let eventArray = Events.map((elem: any) => {
      const start_year = elem.date_deb.getFullYear(); // Get the year (e.g., 2024)
      const start_month = String(elem.date_deb.getMonth() + 1).padStart(2, "0"); // Get the month (0-indexed) and pad with zero if needed
      const start_day = String(elem.date_deb.getDate()).padStart(2, "0");
      const formattedStartDate = `${start_year}-${start_month}-${start_day}`;

      const end_year = elem.date_fin.getFullYear(); // Get the year (e.g., 2024)
      const end_month = String(elem.date_fin.getMonth() + 1).padStart(2, "0"); // Get the month (0-indexed) and pad with zero if needed
      const end_day = String(elem.date_fin.getDate()).padStart(2, "0");
      const formattedEndDate = `${end_year}-${end_month}-${end_day}`;

      return {
        id: `${elem.id}`,
        title: elem.titre,
        start: formattedStartDate,
        end: formattedEndDate,
      };
    });
    return eventArray;
  }
  try {
    // console.log(Calendar)
    let calendarEl = document.getElementById("calendar");
    let addEventButton = document.getElementById("add-event");

    let calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
      initialView: "dayGridMonth",
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,listWeek",
      },
    });
    let currentDate = calendar.getDate();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();

    let eventArray = await fetchEvent(currentMonth, currentYear);
    eventArray.forEach((elem: any) => {
      calendar.addEvent(elem);
    });

    addEventButton.addEventListener("click", () => {
      window.electron.openDetail(1);
      localStorage.setItem("event", JSON.stringify(1));
    });


      calendar.on("eventClick", function (info: any) {
      window.electron.openUpdate(JSON.stringify(info))
    });

    calendar.on("datesSet", async function (info) {
      calendar.removeAllEvents
      
    
      let currentDate = calendar.getDate();
      let currentYear = currentDate.getFullYear();
      let currentMonth = currentDate.getMonth();

      console.log(currentMonth, currentYear);
      eventArray = await fetchEvent(currentMonth, currentYear);
      eventArray.forEach((elem: any) => {
        calendar.addEvent(elem);
      });
    });
    calendar.render();

    /* let e = {
      date_debut: "2024-01-01",
      date_fin:"2024-01-21",
      titre: "test",
      categorie: "party",
      status: "a faire",
      description: "c'est un test",
      transparence: "rien"
    }
    console.log(e);
    console.log(
      createEvent(e).then((res) => {
        console.log(res);
      }).catch((err)=>{
        console.log(err);
      })
    );
*/

    console.log();

    /* console.log(getEventsByDate("01", "2024"));
    console.log(getEventById(1));
    
    let x = {
      date_deb: "2024-01-01",
      date_fin:"2024-01-22",
      titre: "test",
      categorie: "party",
      status: "a refaire",
      description: "ceci est un test a nouveau",
      transparence: "rien"
    }
    console.log(x);
    //console.log(deleteEvent(1));
    console.log(
      updateEvent(1, x)
    );*/
  } catch (err) {
    console.error(err);
  }
})();
