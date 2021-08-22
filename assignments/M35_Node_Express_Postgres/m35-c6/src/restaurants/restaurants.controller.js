const restaurantsService = require("./restaurants.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function restaurantExists(req, res, next) {
  const { restaurantId } = req.params;

  const restaurant = await restaurantsService.read(restaurantId);

  if (restaurant) {
    res.locals.restaurant = restaurant;
    return next();
  }
  next({ status: 404, message: `Restaurant cannot be found.` });
}

function validateBody(req, res, next){
  const body = req.body.data;
  const required = ['restaurant_name', 'cuisine', 'address'];

  const keys = Object.keys(body);
  const invalid = keys.filter((key)=>!required.includes(key));
  if (invalid.length > 0) next({status: 400, message: `Contains invalid keys: ${invalid}`});

  const { restaurant_name, cuisine, address } = req.body.data;
  const params = [restaurant_name, cuisine, address];

  params.map((param) => !param && next({status: 400, message: `Missing a restaurant_name, cuisine, or address`}));
  res.locals.restaurant = {restaurant_name, cuisine, address};
  next();
  
}

async function list(req, res, next) {
  const data = await restaurantsService.list();
  res.json({ data });
}

async function create(req, res, next) {
  const data = await restaurantsService.create(res.locals.restaurant);
  res.status(201).json({ data });
}

async function update(req, res, next) {
  const updatedRestaurant = {
    ...res.locals.restaurant,
    ...req.body.data,
    restaurant_id: res.locals.restaurant.restaurant_id,
  };

  const data = await restaurantsService.update(updatedRestaurant);

  res.json({ data });
}

async function destroy(req, res, next) {
  restaurantsService
    .delete(res.locals.restaurant.restaurant_id)
    .then(()=>res.sendStatus(204));
}

module.exports = {
  list: asyncErrorBoundary(list),
  create: [validateBody, asyncErrorBoundary(create)],
  update: [asyncErrorBoundary(restaurantExists), asyncErrorBoundary(update)],
  delete: [asyncErrorBoundary(restaurantExists), asyncErrorBoundary(destroy)],
};
