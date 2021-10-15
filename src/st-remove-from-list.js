module.exports = function removeKFromList(list, k) {
  if (indexOf(list, k) === -1) {
    return null;
  } else {
    while (indexOf(list, k) != -1) {
      removeAt(list, indexOf(list, k));
    }
  }
  return list;

  function indexOf(list, element) {
    let current = list.value;
    let index = 0;
    if (current === element) return 0;
    index++;

    current = list.next;

    while (current) {
      if (current.value === element) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }
}

function removeAt(list, position) {
  if (position < 0 /*|| position >= list.length*/) {
    return null;
  }

  let current = list.next;

  if (position === 0) {
    list.value = current.value;
    list.next = current.next;
  } else {
    current = list;
    let prev = null;
    let index = 0;

    while (index < position) {
      prev = current;
      current = current.next;
      index++;
    }

    prev.next = current.next;
  }

  //list.length--;
  return list;
}