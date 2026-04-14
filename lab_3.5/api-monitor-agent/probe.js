const axios = require("axios");

async function checkEndpoint(url) {
  const start = Date.now();

  try {
    const response = await axios.get(url, {
      timeout: 10000,
    });

    const responseTime = Date.now() - start;

    return {
      success: true,
      statusCode: response.status,
      responseTime,
      error: null,
      data: response.data,
    };
  } catch (err) {
    const responseTime = Date.now() - start;

    return {
      success: false,
      statusCode: err.response?.status || null,
      responseTime,
      error: err.message,
      data: null,
    };
  }
}

module.exports = { checkEndpoint };