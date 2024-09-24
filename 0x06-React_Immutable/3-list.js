import {List} from 'immutable';

export function getListObject(array) {
  return Lists(array);
}

export function addElementToList(list, element) {
  return list.push(element);
}