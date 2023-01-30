'use strict';

/**
 * skill controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::skill.skill', ({strapi}) => ({
    async findOne(ctx) {
        const {slug} = ctx.params;
        const entity = await strapi.db.query('api::skill.skill').findOne({where: {slug}});
        const sanitizedEntity = await this.sanitizeOutput(entity);
        return this.transformResponse(sanitizedEntity);
    }
}));
