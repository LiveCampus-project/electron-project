import {
  getEventsByDate,
  getEventById,
  createEvent,
  deleteEvent,
  updateEvent,
} from "./utils/utils";

(async () => {
  try {
    console.log("test");
    let submit = document.getElementById("submit");

    submit.addEventListener("click", (e) => {
      e.preventDefault();
      /*  let title = document.getElementById('title');
            let dateEnd = document.getElementById('date_end');
            let dateBegin = document.getElementById('date_begin');
            let description = document.getElementById('description');
            let categorie = document.getElementById('categorie');
*/
      const title = (document.getElementById("title") as HTMLInputElement)
        .value;
      const dateEnd = (document.getElementById("date_end") as HTMLInputElement)
        .value;
      const dateBegin = (
        document.getElementById("date_begin") as HTMLInputElement
      ).value;
      const description = (
        document.getElementById("description") as HTMLInputElement
      ).value;
      const categorie = (
        document.getElementById("categorie") as HTMLInputElement
      ).value;

      function verifyValues(): boolean {
        const title = (document.getElementById("title") as HTMLInputElement)
          .value;
        const dateEnd = (
          document.getElementById("date_end") as HTMLInputElement
        ).value;
        const dateBegin = (
          document.getElementById("date_begin") as HTMLInputElement
        ).value;
        const description = (
          document.getElementById("description") as HTMLInputElement
        ).value;
        const categorie = (
          document.getElementById("categorie") as HTMLInputElement
        ).value;

        const emptyFields: string[] = [];

        if (title.trim() === "") {
          emptyFields.push("Title");
        }
        if (dateEnd.trim() === "") {
          emptyFields.push("Date End");
        }
        if (dateBegin.trim() === "") {
          emptyFields.push("Date Begin");
        }
        if (description.trim() === "") {
          emptyFields.push("Description");
        }
        if (categorie.trim() === "") {
          emptyFields.push("Categorie");
        }

        if (emptyFields.length > 0) {
          console.log(`Empty fields: ${emptyFields.join(", ")}`);
          return false; // At least one value is empty
        }

        return true; // All values are filled
      }

      // Usage
      const areValuesFilled = verifyValues();
      if (areValuesFilled) {
        const obj = {
          title: title,
          date_begin: dateBegin,
          date_end: dateEnd,
          description: description,
          categorie: categorie,
        };
        createEvent(obj);

        let successMsg = document.getElementById("success_msg");
        successMsg.innerText = "Enregistré !";
        successMsg.style.color = "green";

        let errorMsg = document.getElementById("error_msg");
        errorMsg.innerText = "";
      } else {
        let errorMsg = document.getElementById("error_msg");
        errorMsg.innerText = "Some values are empty.";
        errorMsg.style.color = "red";

        let successMsg = document.getElementById("success_msg");
        successMsg.innerText = "";
      }
    });
  } catch (err) {
    console.error(err);
  }
})();
