import { Server, Model } from 'miragejs'

export function makeServer({ environment = "development" } = {}) {

let server = new Server({
  environment,

    models: {
      dinosaur: Model,
    },

  seeds(server) {
  server.create("dinosaur", { id: 1, name: 'Diplodocus', weight: 22680, height: 7.3, lastUpdated: '13/07/2020' })
  server.create("dinosaur", { id: 2, name: 'Tyrannosaurus', weight: 6350, height: 7, lastUpdated: '13/07/2020' })
  server.create("dinosaur", { id: 3, name: 'Ornithomimus', weight: 135, height: 2.4, lastUpdated: '13/07/2020' })
  server.create("dinosaur", { id: 4, name: 'Velociraptor', weight: 13, height: 0.8, lastUpdated: '13/07/2020' })
  },

  routes() {

    this.namespace = "api"

    this.get("/dinosaurs", schema => {
      return schema.dinosaurs.all()
    })
    
  },
  })

  return server
}