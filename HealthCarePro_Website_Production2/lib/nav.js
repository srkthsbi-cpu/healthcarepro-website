const categories = require("../data/categories.js");
const services1 = require("../data/services.js");
const services2 = require("../data/services-2.js");
const infoCategories = require("../data/info-categories.js");
const articles = require("../data/articles.js");

const allServices = services1.concat(services2);

function servicesByCategory(categorySlug) {
  return allServices.filter((s) => s.categorySlug === categorySlug);
}

function articlesByCategory(categorySlug) {
  return articles.filter((a) => a.categorySlug === categorySlug);
}

function getService(slug) {
  return allServices.find((s) => s.slug === slug);
}

function getCategory(slug) {
  return categories.find((c) => c.slug === slug);
}

function getInfoCategory(slug) {
  return infoCategories.find((c) => c.slug === slug);
}

function getArticle(slug) {
  return articles.find((a) => a.slug === slug);
}

function serviceUrl(service) {
  return `/hizmetler/${service.categorySlug}/${service.slug}/`;
}

function categoryUrl(categorySlug) {
  return `/hizmetler/${categorySlug}/`;
}

function articleUrl(article) {
  return `/bilgi-merkezi/${article.categorySlug}/${article.slug}/`;
}

function infoCategoryUrl(slug) {
  return `/bilgi-merkezi/${slug}/`;
}

// navTree: categories -> services, for header mega menu
const navTree = categories.map((cat) => ({
  ...cat,
  services: servicesByCategory(cat.slug),
}));

module.exports = {
  categories,
  allServices,
  infoCategories,
  articles,
  servicesByCategory,
  articlesByCategory,
  getService,
  getCategory,
  getInfoCategory,
  getArticle,
  serviceUrl,
  categoryUrl,
  articleUrl,
  infoCategoryUrl,
  navTree,
};
