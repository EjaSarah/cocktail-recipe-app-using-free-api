import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const cocktail = response.data.drinks[0];
    res.render("index.ejs", { cocktail });
  } catch (error) {
    console.error("Error fetching cocktail data:", error);
    res.render("index.ejs", { cocktail: null });
  }
});
app.listen(port, () => {
  console.log(`Server is running on ${port}.`);
});
