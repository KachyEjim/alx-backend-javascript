export default function createIteratorObject(report) {
  const users = [];
  for (const item of Object.values(report)) {
    users.push(...item);
  }
  return users;
}
