import defaultMiddleware from "./default.mjs";

// register all middleware
export default function registerMiddlewares(server){
    defaultMiddleware(server);
}