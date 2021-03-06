/*
permet d'obtenir un slug à partir d'une chaîne de caractères => chaîne de
caractères simplifiée, qui passera bien comme URL (notamment remplacement des
espaces par des tirets)
*/
import slugify from 'slugify';

export const slugifyTitle = (title) => (
  slugify(title, {
    lower: true,
  })
);

/**
 * Get the travel for a given slug
 * @param {Array} travels Travels into which searching the travel
 * @param {String} slug Slug to search for
 */
export const gettravelBySlug = (travels, slug) => (
  travels.find((currenttravel) => slugifyTitle(currenttravel.title) === slug)
);
