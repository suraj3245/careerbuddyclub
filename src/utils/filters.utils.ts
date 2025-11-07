// NEW UTILITY: Centralized filter query/state helpers

import { ReadonlyURLSearchParams } from "next/navigation";

export type FiltersObject = Record<string, string[]>;

/** Converts URLSearchParams (from next/navigation) to a filters object: { Location: ['Delhi'], Courses: ['id'] } */
export function parseFiltersFromSearchParams(params: URLSearchParams | ReadonlyURLSearchParams): FiltersObject {
  const filters: FiltersObject = {};
  params.forEach((value, key) => {
    if (!filters[key]) filters[key] = [];
    if (!filters[key].includes(value)) filters[key].push(value);
  });
  return filters;
}

/** Helper to turn flat { Location: ['Delhi'], ... } into a search params string */
export function filtersToURLParams(filters: FiltersObject): string {
  const url = new URLSearchParams();
  Object.entries(filters).forEach(([key, values]) => {
    values.forEach(val => url.append(key, val));
  });
  return url.toString();
}

/** Updates a filter in URL via router.replace(), replaces all values for a given category */
export function setFilterCategory(router: any, category: string, values: string[], curr: FiltersObject) {
  const newFilters: FiltersObject = { ...curr, [category]: values };
  if (values.length === 0) delete newFilters[category];
  const url = filtersToURLParams(newFilters);
  router.replace(url ? `?${url}` : "?", { scroll: false });
}

/** Removes a specific filter value from a given category, then updates router */
export function removeFilter(router: any, category: string, value: string, curr: FiltersObject) {
  if (!curr[category]) return;
  const next = { ...curr };
  next[category] = next[category].filter(v => v !== value);
  if (next[category].length === 0) delete next[category];
  const url = filtersToURLParams(next);
  router.replace(url ? `?${url}` : "?", { scroll: false });
}

/** Clears all filters via router.replace() */
export function clearAllFilters(router: any) {
  router.replace("?", { scroll: false });
}