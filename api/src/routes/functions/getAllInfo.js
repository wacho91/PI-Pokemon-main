const getApiInfo = require('./getApiInfo');
const getDbInfo = require('./getDbInfo');

const getAllInfo = async () => {
    const [apiInfo, dbInfo] = await Promise.all([getApiInfo(), getDbInfo()]);
    const allPokemonInfo = apiInfo.concat(dbInfo);
    return allPokemonInfo;
}

module.exports = {getAllInfo};