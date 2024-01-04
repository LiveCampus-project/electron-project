import {
    getEventByDate,
    getEventById,
    createEvent,
    deleteEvent,
    updateEvent,
  } from "./utils/utils";

(async () => { 
    try {
        console.log('test');
        let submit = document.getElementById("submit");
        console.log(submit);
        submit.addEventListener("click", () => {
            console.log("clicked");
        });


    } catch (err) {
        console.error(err)
    }
 })();