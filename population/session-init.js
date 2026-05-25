export function initSession() {
  return {
    id: String(Date.now()),
    createdAt: Date.now()
  };
}
