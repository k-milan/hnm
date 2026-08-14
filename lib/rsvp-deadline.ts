// June 2, 2026 00:00 at UTC+8 == June 1, 2026 16:00 UTC.
export const RSVP_CUTOFF_UTC = new Date("2026-06-01T16:00:00.000Z");

export const RSVP_DEADLINE_LABEL = "June 01";

export const RSVP_CLOSED_MESSAGE =
  "The RSVP deadline has passed. Thank you so much for your response and for all your love and support.";

export function isRsvpClosed(referenceTime: Date = new Date()) {
  return referenceTime.getTime() >= RSVP_CUTOFF_UTC.getTime();
}
