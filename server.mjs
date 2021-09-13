import { server } from "./config/index.mjs";
import { rootRouter } from "./routes/index.mjs";
import registerMiddlewares  from "./middlewares/index.mjs";

async function main(){
  registerMiddlewares(server);
  server.all("/", (req, res) => res.redirect("/v1"));
  server.use("/v1", rootRouter);

  server.listen();
}
main();

