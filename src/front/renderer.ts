// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.

import { afficheUsers, ajouteUser } from './utils/utils.js'
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
//import timeGridPlugin from '@fullcalendar/timegrid';
//import listPlugin from '@fullcalendar/list';



(async () => {
    try {
        console.log(Calendar)
       /* let calendarEl = document.getElementById('calendar');

        let calendar = new Calendar(calendarEl, {
          plugins: [ dayGridPlugin, timeGridPlugin, listPlugin ],
          initialView: 'dayGridMonth',
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,listWeek'
          }
        });*/
       
    }
    catch (err) {
        console.error(err)
    }

})()

