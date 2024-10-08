import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number,
  HOST: string,
  TANGO_API_URL: string;
  TANGO_TOKEN_TEST: string;
  TCP_SERVICE: string;
  SECRET_KEY: string;
}

const envsSchema = joi.object({
  PORT: joi.number().required(),
  HOST: joi.string().required(),
  TANGO_API_URL: joi.string().required(),
  TANGO_TOKEN_TEST: joi.string().required(),
  TCP_SERVICE: joi.string().required(),
  SECRET_KEY: joi.string().required(),
})
.unknown(true);

const { error, value } = envsSchema.validate({ 
  ...process.env
});


if ( error ) {
  throw new Error(`Config validation error: ${ error.message }`);
}

const envVars:EnvVars = value;

export const envs = {
  port: envVars.PORT,
  host: envVars.HOST,
  tango_api_url: envVars.TANGO_API_URL,
  tango_token_test: envVars.TANGO_TOKEN_TEST,
  tcp_service: envVars.TCP_SERVICE,
  secret_key: envVars.SECRET_KEY,
};