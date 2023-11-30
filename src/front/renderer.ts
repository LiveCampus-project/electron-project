// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.

import {
  getEventsByDate,
  getEventById,
  createEvent,
  deleteEvent,
  updateEvent,
} from "./utils/utils";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

(async () => {
  try {
    // console.log(Calendar)
    let calendarEl = document.getElementById("calendar");

    let calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
      initialView: "dayGridMonth",
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,listWeek",
      },
    });
    calendar.render();

    console.log(getEventsByDate("01", "2021"));
    console.log(getEventById(1));
    console.log(
      createEvent({
        title: "test",
        date: "2021-01-01",
        time: "10:00",
        description: "test",
        location: "test",
      })
    );
    console.log(deleteEvent(1));
    console.log(
      updateEvent(1, {
        title: "test",
        date: "2021-01-01",
        time: "10:00",
        description: "test",
        location: "test",
      })
    );
  } catch (err) {
    console.error(err);
  }
})();
