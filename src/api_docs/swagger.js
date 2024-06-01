const meta = require("./swaggerMeta");
const paths = require("./paths");
const components = require("./components");

module.exports = {
  openapi: meta.openapi,
  info: {
    title: meta.info.title,
    version: meta.info.version,
    description: meta.info.description,
    contact: {
      name: meta.info.contact.name,
      url: meta.info.contact.url,
      email: meta.info.contact.email,
    },
  },
  servers: meta.servers,
  paths: paths,
  components: components,
  security: [
    {
      bearerAuth: [],
    },
  ],
};
