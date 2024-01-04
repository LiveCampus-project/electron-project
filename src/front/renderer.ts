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
  updateEvent
} from "./utils/utils";
import { Calendar } from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

(async () => {
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

    addEventButton.addEventListener("click", () => {
      window.electron.openDetail(1);
      localStorage.setItem("event", JSON.stringify(1));
    });

    calendar.on("dateClick", function (info) {
      if (localStorage.getItem("event") != null) {
        console.log("clicked on " + info.dateStr);
      } else [console.log("nope")];
    });

    calendar.render();


    let e = {
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



    console.log(getEventsByDate("01", "2024"));
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
    );
  } catch (err) {
    console.error(err);
  }
})();
