import setupApp from "./app";

const port = 3333;

(async () => {
  try {
    const app = await setupApp();
    const server = app.listen(port, () => console.log(`app running on port ${port}`));

    const exitSignals = ["SIGINT", "SIGTERM", "SIGQUIT"];
    exitSignals.map(signal =>
      process.on(signal, () => {
        server.close(error => {
          if (error) {
            console.error(error);
            process.exit(1);
          }
          app.database.connection.close(function() {
            console.info("Database connection closed!");
            process.exit(0);
          });
        })
      })
    );
  
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();