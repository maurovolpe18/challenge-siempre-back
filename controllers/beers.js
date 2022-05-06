const { response, request } = require("express");

const findTwoBeers = (req = request, res = response) => {
  const { beers, target } = req.body;

  // let array = [15, 20, 25, 39, 12, 18, 19, 21];
  if (beers.length < 2) {
    return res.json({ succes: false, message: "there must be more than one beer" });
  }
  if (beers.includes(0)) {
    return res.json({ succes: false, message: "The IBU value must not be equal to zero" });
  }
  if (!target) {
    return res.json({ succes: false, message: "target is required" });
  }
  const findBeers = (target) => {
    let findTarget = beers.find((elem) => elem === target);

    let exist = [];
    let variable = null;
    for (let i = 0; i < beers.length; i++) {
      variable = beers[i];

      for (let j = i + 1; j < beers.length; j++) {
        if (variable + beers[j] === target) {
          exist = [beers.indexOf(variable), beers.indexOf(beers[j])];
        }
      }
      if (exist.length > 0) {
        break;
      }
    }
    if (exist.length === 2) {
      return exist;
    } else {
      if (findTarget) {
        return [beers.indexOf(target)];
      } else {
        return exist;
      }
    }
  };

  let results = findBeers(target);

  return res.json({
    succes: true,
    data: results,
  });
};

module.exports = {
  findTwoBeers,
};
