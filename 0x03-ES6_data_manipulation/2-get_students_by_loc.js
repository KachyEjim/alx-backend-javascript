// function that returns an array of objects who are located in a specific city

export default function getStudentsByLocation(obj, city) {
  const filter_std = obj.filter((item) => city == item.location);
  return filter_std;
}
