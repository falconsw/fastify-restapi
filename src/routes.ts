import { FastifyInstance } from "fastify";
import { Product } from "./modules/product.entity";


const routes = async (fastify: FastifyInstance, opts: any, done: any) => {

  fastify.get("/", async (request, reply) => {
    return { hello: "world" };
  });

  // GET /products
  fastify.get("/products", async function(request, reply) {
      return await this.orm.getRepository(Product)
        .createQueryBuilder('product')
        .getMany();
    });

  // GET /products/:id
  fastify.get("/products/:id",  async function(request: any, reply) {

    const { id } = request.params;
      return this.orm.getRepository(Product).findOne(id);
  });

  // POST /products
  fastify.post("/products", async function(request: any, reply) {
    const { body } = request;
    const product = new Product();
    product.name = body.name;
    product.price = body.price;
    return this.orm.getRepository(Product).save(product);
  });

  // PUT /products/:id
  fastify.put("/products/:id", async function(request: any, reply) {
    const { id } = request.params;
    const { body } = request;
    const product = await this.orm.getRepository(Product).findOne(id);
    const updatedProduct = { ...product, ...body };
    return this.orm.getRepository(Product).save(updatedProduct);
  });

  // DELETE /products/:id
  fastify.delete("/products/:id", async function(request: any, reply) {
    const { id } = request.params;
    await this.orm.getRepository(Product).delete(id);
    return { message: "Product deleted" };
  });

}

export default routes;
