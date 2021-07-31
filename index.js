// čia dėti visą pavyzdinį kodą, kuris turėtų paaiškinti, kaip naudotis jūsų sukurtu kodu

const ClassDiary = require("./ClassDiary");

const dienynas = new ClassDiary('Kukulaiciai')

dienynas.intro();

dienynas.addStudent(`Jonas`);

dienynas.addLesson(`Lietuviu kalba`);
dienynas.addLesson(`Matematika`);
dienynas.addLesson(`Fizika`);

dienynas.addMark('Jonas', 'Fizika', 10, '2021-05.05');
dienynas.addMark('Jonas', 'Lietuviu kalba', 7, '2021-05.05');
dienynas.addMark('Jonas', 'Matematika', 6, '2021-05.05');
dienynas.addMark('Jonas', 'Matematika', 9, '2021-05.06');
dienynas.addMark('Jonas', 'Lietuviu kalba', 8, '2021-05.06');
dienynas.addMark('Jonas', 'Matematika', 4, '2021-05.08');
dienynas.addMark('Jonas', 'Matematika', 8, '2021-05.08');
dienynas.addMark('Jonas', 'Lietuviu kalba', 9, '2021-05.08');
dienynas.addMark('Jonas', 'Fizika', 5, '2021-05.08');

dienynas.showStudentsMarks('Jonas');

dienynas.showStudentsAverageMark('Jonas');
// console.log(dienynas);
