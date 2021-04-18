const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const { projectID } = ctx.params;

    const entity = await strapi.services.project.findOne({ projectID });
    return sanitizeEntity(entity, { model: strapi.models.project });
  },
};
