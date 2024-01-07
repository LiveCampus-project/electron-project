async () => {

  window.electron.onEvent((e, info) => {
   console.log(info)
  });

  try {
    console.log("ici")
    const title = document.getElementById("title");
    const dateEnd = document.getElementById("date_end") as HTMLInputElement;
    const dateBegin = document.getElementById("date_begin") as HTMLInputElement;
    const description = document.getElementById("description") as HTMLInputElement;
    const categorie = document.getElementById("categorie") as HTMLInputElement;

    title.innerText = "test";
    console.log(title)
  } catch (err) {
    console.error(err)
  }
};
