const ethers = require("ethers");

const {
  getLogger,
  InputError,
  isString,
  getHubPoolClient,
} = require("./_utils");

const handler = async (request, response) => {
  const logger = getLogger();
  try {
    const hubPoolClient = await getHubPoolClient();

    let { token } = request.query;
    if (!isString(token))
      throw new InputError("Must provide token as query param");

    token = ethers.utils.getAddress(token);

    await hubPoolClient.updatePool(token);

    // Instruct Vercel to cache limit data for this token for 5 minutes. Caching can be used to limit number of
    // Vercel invocations and run time for this serverless function and trades off potential inaccuracy in times of
    // high volume. "max-age=0" instructs browsers not to cache, while s-maxage instructs Vercel edge caching
    // to cache the responses and invalidate when deployments update.
    response.setHeader("Cache-Control", "s-maxage=300");
    response.status(200).json(hubPoolClient.getPoolState(token));
  } catch (error) {
    let status;
    if (error instanceof InputError) {
      logger.warn({ at: "pools", message: "400 input error", error });
      status = 400;
    } else {
      logger.error({ at: "pools", message: "500 server error", error });
      status = 500;
    }
    response.status(status).send(error.message);
  }
};

module.exports = handler;
