const capitalCities = require('./capitalCities');
const dayjs = require('dayjs');
const advancedFormat = require('dayjs/plugin/advancedFormat');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
const locale_fr = require('dayjs/locale/fr');
const locale_ru = require('dayjs/locale/ru');
const locale_ar = require('dayjs/locale/ar-ma');
const locale_ja = require('dayjs/locale/ja');
const locale_hi = require('dayjs/locale/hi');
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);
dayjs.tz.setDefault('Europe/Paris');

const tz = {
  rollObject(url) {
    return capitalCities.find((obj) => {
      return (
        obj.name === url.charAt(0).toUpperCase() + url.slice(1).toLowerCase()
      );
    });
  },
  chooseTZ(url) {
    const city = tz.rollObject(url);
    return city
      ? tz.serveHTML(tz.defineTZ(city, ' HH:mm:ss z', 'fr'), city)
      : tz.serveHTML("Oups il n'y a rien à voir ici!");
  },
  defineTZ(city) {
    return city.format && city.lang
      ? dayjs().tz(city.tz).locale(city.lang).format(city.format)
      : dayjs()
          .tz(city.tz)
          .locale('en')
          .format('dddd, MMMM Do YYYY HH:mm:ss z');
  },
  serveHTML(timeDate, city) {
    town = city ? city.name : 'Erreur 404';
    return [town, timeDate];
  },
};

module.exports = tz;
