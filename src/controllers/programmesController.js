const axios = require('axios');
const dayjs = require('dayjs');

module.exports = () => {
  const programmes = {};

  programmes.listProgrammes = async (req, res) => {
    const { date } = req.body;

    let dateFormatted = dayjs(date).format('YYYY-MM-DD');

    if (!dayjs(date).isValid()) {
      dateFormatted = date.split('/').reverse().join('-');
    }

    const dateRequest = date ? `?date=${dateFormatted}` : '';

    try {
      const { data } = await axios.get(`https://epg-api.video.globo.com/programmes/1337${dateRequest}`);

      return res.json({ data: data.programme });
    } catch (error) {
      return new Error(error);
    }
  };

  programmes.listProgrammesOnNewDate = async (req, res) => {
    const { date } = req.params;

    let dateFormatted = dayjs(date).format('YYYY-MM-DD');

    if (!dayjs(date).isValid()) {
      dateFormatted = date.split('/').reverse().join('-');
    }

    const dateRequest = date ? `?date=${dateFormatted}` : '';

    try {
      const { data } = await axios.get(`https://epg-api.video.globo.com/programmes/1337${dateRequest}`);

      return res.json({ data: data.programme });
    } catch (error) {
      return new Error(error);
    }
  };

  return programmes;
};
