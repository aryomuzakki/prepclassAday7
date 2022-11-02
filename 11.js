function arrayRemover(array, item) {
  array.splice(array.indexOf(item), 1);
  console.log(array);
}

const fruits = ['Jeruk', 'Pepaya', 'Jambu', 'Anggur', 'Melon']
arrayRemover(fruits, "Jambu");