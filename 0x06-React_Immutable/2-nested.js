export default function accessImmutableObject(object, array) {
  return array[0].get(array[1]);
}
