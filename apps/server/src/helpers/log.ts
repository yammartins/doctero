import {
  config,
  format,
  transports,
  createLogger,
} from 'winston';

import Config from './config';

const {
  label,
  printf,
  combine,
  colorize,
} = format;

const env = Config('env');

const logger = createLogger({
  levels: config.syslog.levels,

  format: combine(
    colorize({
      level: true,
    }),
    label({
      label: env,
    }),
    printf(({ level, message, label }) => `[${label}] ${level}: ${message}`),
  ),
  transports: [

    /**
     * Logs when testing are SO MEH.
     */
    new transports.Console({
      silent: env === 'testing',
    }),
  ],
});

/**
 * Add syslog transporter only in production.
 */
// if (env === 'production') {
//   logger.add(new transports.Syslog({
//     host: Config('papertrail.host'),
//     port: Config('papertrail.port'),
//   }));
// }

/**
 * Add console log for errors when testing.
 */
if (env === 'testing') {
  logger.add(new transports.Console({
    level: 'warning',
  }));
}

/**
 * Export default logger.
 */
export default logger;

const {
  info,
  error,
  warning: warn,
} = logger;

export {
  info,
  warn,
  error,
};
