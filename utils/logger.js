const winston = require('winston');

function generateFormat({ withColor }) {

  const opts = [
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf((info) => {
      const {
        timestamp, level, message, ...args
      } = info;
  
      const ts = timestamp.slice(0, 19).replace('T', ' ');
      return `${ts} [${level}]: ${message} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`;
    }),
  ];

  return withColor ? winston.format.combine(...opts) : winston.format.combine(...opts.slice(1));
}

const stdOut = new winston.transports.Console({ format: generateFormat({ withColor: true }) });
const logFile = new winston.transports.File({ filename: 'logs.log', format: generateFormat({ withColor: false }) });

const logger = winston.createLogger({
  transports: [stdOut, logFile],
});

process.on('uncaughtException', (err) => {
  logger.error(err.message);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  logger.error(err.message);
  process.exit(1);
});

module.exports = logger;