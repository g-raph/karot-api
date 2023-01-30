'use strict';

/**
 * division controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::division.division', ({strapi}) => ({
    async findOne(ctx) {
        const {slug} = ctx.params;
        const entity = await strapi.db.query('api::division.division').findOne({where: {slug}});
        const sanitizedEntity = await this.sanitizeOutput(entity);
        return this.transformResponse(sanitizedEntity);
    }
}));
