const query = async function () {
  try {
    const response = await fetch(
      `http://ergast.com/api/f1/2008/drivers/alonso/results`
    );
  } catch (error) {
    console.log(error);
    alert("Hey, something went wrong.");
  }
};
query();
