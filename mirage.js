import { createServer, Model } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      tenancy: Model,
    },

    seeds(server) {
      server.create("tenancy", {
        address: "Peter Bangs Vej 236, 2. tv",
        size: 106,
        rooms: 4,
        rent: 5600,
        tenant: "Adam S. Schou",
      });
      server.create("tenancy", {
        address: "Lindevangen 82, 2830 Virum",
        size: 98,
        rooms: 4,
        rent: 7600,
        tenant: "Sebastian J. Overgaard",
      });
      server.create("tenancy", {
        address: "Nyelandsvej 78, 2000 Frederiksberg",
        tenant: "Astrid M. Mathiesen",
      });
    },

    routes() {
      this.passthrough();
      this.namespace = "api";

      this.get("/tenancies", (schema) => {
        return schema.tenancies.all();
      });
      this.get("/tenancies/:id", (schema, request) => {
        let id = request.params.id;
        return schema.tenancies.find(id);
      });
      this.post("/tenancies", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);

        const tenancy = schema.tenancies.create(attrs);

        return tenancy;
      });

      this.del("/tenancies/:id", (schema, request) => {
        let id = request.params.id;

        return schema.tenancies.find(id).destroy();
      });

      this.patch("/tenancies/:id", (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        let tenancy = schema.tenancies.find(id);
        return tenancy.update(newAttrs);
      });

      this.passthrough();
      this.passthrough("https://api.dataforsyningen.dk/**");
    },
  });

  return server;
}
