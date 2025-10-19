export function formatDate(date: Date | null): string {
  if (!date) return "";

  return new Date(date).toISOString().split("T")[0];
}
