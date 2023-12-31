// Bài tập 1: Lấy ra Ken nhưng không lấy ra John sử dụng kĩ thuật Destructuring
console.log("Kết quả bài tập 1:");

const names = ["John", "Ken", "Tommy", "Jane"];

// Code dưới này

const [, , , name] = names;
console.log(name);

// Bài tập 2: Cho object student1, hãy in ra 3 giá trị của 3 keys đầu tiên trong object sử dụng Rest Operator và Destructuring
// Cùng lúc đó, in ra các cặp key-value còn lại sử dụng Destructuring (sử dụng một dòng console.log duy nhất)
// Expected Output: [ 'Minh', 'Nam', 'Viet' ] FPTU HN { studentName: 'Khoi', isHandsome: 'kinda', age: 20 }
console.log("Kết quả bài tập 2:");

const student = {
  studentName: "Khoi",
  isHandsome: "kinda",
  age: 20,
  friends: ["Minh", "Nam", "Viet"],
  school: "FPTU HN",
};

// Code dưới này
// const { friends, school, ...rest } = student;
console.log(friends, school, rest);

// Bài tập 3: Sử dụng chính object student ở bài 2, hãy in ra từng phần tử trong mảng friends sử dụng Destructuring
//expected Output: Minh Nam Viet
console.log("Kết quả bài tập 3:");

// Code dưới này
// const { friends } = student;
// const { friend1, friends2, friend3 } = friends;
// console.log(friend1, friends2, friend3);



// Bài tập 4:
// Cho sẵn một function dùng để in ra thông tin của student
// Hãy tự khởi tạo một object myStudent có 5 cặp key-value (name, age, school và 2 cái còn lại có thể tự viết ra nhé)
// Dùng destructuring, thực hiện in ra name, age, school.
// Và sau đó sử dụng rest operator để in ra giá trị của 2 key còn lại nằm trong object myStudent ra terminal
// (và lưu ý chỉ được sử dụng một dòng console.log duy nhất)
console.log("Kết quả bài tập 4:");
const myStudent = {
  // Tự khởi tạo object myStudent ở đây
  namee: "Nam",
  agee: 20,
  school: "FPTU HN",
  mark: 8.0,
  isSophomore: true,
};

// Cho sẵn một function như sau, tự điều chỉnh tham số (tham số bắt buộc phải là 1 Object):

const myStudents = {
  name: "Nam",
  age: 20,
  school: "FSoft",
  mark: 100,
  isSophomore: true,
};

const logStudentInfo = ({ name, age, school, ...rest }) => {
  const {mark , isSophomore} = rest 
  console.log(name, age, school, mark, isSophomore);
};

logStudentInfo(myStudents);
