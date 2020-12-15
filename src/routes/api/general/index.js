"use strict";

module.exports = async function (fastify, opts) {
  fastify.route({
    url: "/",
    method: "GET",
    handler: async (request, reply) => {
      const { General } = fastify.db();

      const generals = await General.findAll();

      reply.send({ rep: { generals } });
    },
  });
};
