/**
 * Clears everything the browser holds for the signed-in user.
 *
 * Wipes BOTH localStorage and sessionStorage, so no auth token, profile data
 * (username, School_email, School_id, student_id, mobile, …), test/quiz status
 * or user-specific items (e.g. wishlist_items) survive a sign-out — including
 * keys added in future that this file doesn't know about.
 *
 * If a key ever needs to survive sign-out (a device preference such as cookie
 * consent or theme — never user data), add it to PRESERVED_KEYS.
 */
export const PRESERVED_KEYS: readonly string[] = [];

function clearStorage(storage: Storage | undefined) {
  if (!storage) return;
  const keep = PRESERVED_KEYS.map((key) => [key, storage.getItem(key)] as const).filter(
    ([, value]) => value !== null
  );
  storage.clear();
  keep.forEach(([key, value]) => storage.setItem(key, value as string));
}

export function clearUserSession(): void {
  if (typeof window === "undefined") return;
  // Each storage is cleared separately so a failure in one (e.g. storage
  // blocked in a privacy mode) doesn't stop the other from being cleared.
  try {
    clearStorage(window.localStorage);
  } catch (error) {
    console.error("Logout: could not clear localStorage", error);
  }
  try {
    clearStorage(window.sessionStorage);
  } catch (error) {
    console.error("Logout: could not clear sessionStorage", error);
  }
}
