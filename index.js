import { app } from "./src/app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server running at port : ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Hello World the server is running");
})

// App error event handling
app.on("error", (error) => {
    console.log("App error: ", error);
    throw error;
});
