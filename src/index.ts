import "dotenv/config";
import app from "app";

function notify(): void {
  console.log("SERVER IS UP");
}

app.listen(process.env.PORT, notify);
