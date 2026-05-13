import { Server } from "http";
import app from "./app.js";
import config from "./config/env.js";

let server: Server;
const bootstrap = async () => {
  try {
    server = app.listen(config.port, () => {
      console.log(`Server is running port: http://localhost:${config.port}`);
    });
  } catch (error) {
    console.log(" Server error", error);
  }
};
(async () => {
  await bootstrap();
})();

process.on("unhandledRejection", (error) => {
  console.log("Unhandled Rejection Detected");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

process.on("uncaughtException", (error) => {
  console.log("Uncaught Exception Detected");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});
process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down gracefully");
  if (server) {
    server.close(() => {
      console.log("Server closed gracefully");
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
});
