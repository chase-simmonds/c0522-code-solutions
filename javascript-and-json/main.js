var books = [
  {
    isbn: '111-111-1111',
    title: 'Horton Hears a Who',
    author: 'Dr. Seuss'
  },
  {
    isbn: '222-222-2222',
    title: 'The Rainbow Fish',
    author: 'Marcus Pfister'
  },
  {
    isbn: '333-333-3333',
    title: 'Corduroy',
    author: 'Don Freeman'
  }
];

console.log('typeof value for books:', typeof books);

JSON.stringify(books);
console.log('JSON stringify value:', books);
console.log('JSON stringify typeof value:', typeof books);

var student = '{"numberId": "420-69", "name": "Chase Simmonds"}';
console.log('JSON student value:', student);
console.log('JSON student typeof value:', typeof student);

var parse = JSON.parse(student);
console.log('JSON parse value:', parse);
console.log('JSON parse typeof value:', typeof parse);
