// A function that returns an array of objects

export default function getListStudentIds(obj) {
  if (!(obj instanceof Array)) return [];
  const listId = obj.map((item) => item.id);
  return listId;
}
