import { Seq } from 'immutable';

export default function printBestStudents (object) {
  const seqObj = Seq(object);

  const transformed = seqObj.filter(value => value.score < 70).map(value => {
    value.firstName = value.firstName.charAt(0).toUpperCase() + value.firstName.slice(1);
    value.lastName = value.lastName.charAt(0).toUpperCase() + value.lastName.slice(1);
    return value;
  });

  console.log(transformed.toObject);
}
