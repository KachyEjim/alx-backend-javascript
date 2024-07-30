// A function that returns an array of objects

export default function getListStudentIds(obj) {
  if (!(obj instanceof Array)) return [];
  const list_id = obj.map((item) => item.id);
  return list_id;
}
