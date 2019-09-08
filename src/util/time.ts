export function formatDate(date: Date, format: string): string {
  const year = date.getFullYear() + '';
  const month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

  const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  const minute =
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  const second =
    date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

  return format
    .replace(/Y+/, year)
    .replace(/M+/, month as string)
    .replace(/D+/, day as string)
    .replace(/H+/, hour as string)
    .replace(/m+/, minute as string)
    .replace(/s+/, second as string);
}
