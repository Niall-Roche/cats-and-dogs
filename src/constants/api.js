export const LIMIT = 25
export const MAX_OFFSET = 4999
export const MAX_TOTAL = MAX_OFFSET + LIMIT
export const MAX_PAGES = Math.ceil(MAX_TOTAL / LIMIT)