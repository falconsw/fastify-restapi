import fastify, { FastifyInstance} from "fastify";
import fastifyEnv from "@fastify/env";
import fastifyTypeormPlugin from "fastify-typeorm-plugin";
import routes from "./routes";

const schema = {
  type: "object",
  "required": ["PORT"],
  properties: {
    PORT: {
      type: "number",
      "default": 3000
    },
    APP_ENV: {
      type: "string",
      "default": "dev"
    },
  },
};

const options = {
  confKey: "config",
  schema
};

declare module "fastify" {
  interface FastifyInstance {
    config: {
      PORT: number;
    },
  }
}


export default () => {
  const app: FastifyInstance = fastify();
  app.register(fastifyEnv, options);
  app.register(routes);
  app.register(fastifyTypeormPlugin, {
    type: "sqlite",
    database: "./db.sqlite",
    synchronize: true,
    logging: false,
    entities: ["src/modules/**/*.entity.ts"],
  });
  app.addContentTypeParser(['application/json', 'text/json'], { parseAs: 'string' }, (req, body, done) => {
    try {
      const json = JSON.parse(typeof body === 'string' ? body : body.toString())
      done(null, json)
    } catch (err) {
      done(null)
    }
  })

  return app;
}
