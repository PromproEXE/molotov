import Joi from 'joi';

export const validationRules = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'provision')
    .default('development'),
  PORT: Joi.number().default(3333),
  DATABASE_URL: Joi.string().required(),
  SECRET: Joi.string().required(),
});
