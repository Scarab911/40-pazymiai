class ClassDiary {
    constructor(className) {
        this.class = className;

        this.studentsList = [];
        this.lessonList = [];

        this.studentIdCount = 0;
        this.lessonIdCount = 0;

        this.marksList = [];

    }
    intro() {
        console.log(`Penktoku klases "${this.class}" dienynas!`);
    }
    addStudent(studentsName) {
        this.studentsList.push(studentsName,);
        this.studentIdCount++
        console.log(`"${this.class}" klases, mokinys ${studentsName} pridetas i dienyna!`);
    }
    addLesson(lessonName) {
        this.lessonList.push(lessonName);
        this.lessonIdCount++
        console.log(`Pamoka "${lessonName}" prideta i dienyna!`);

    }
    addMark(studentsName, addTolessonName, mark, date) {
        // this.marksList = [{ studentId: 0, lessonID: 0, mark: 10, date: '' }];

        //susirandam dalyko id pagal duota varda is dalyku saraso ir priskiriam kintamajam
        let lessonID = 0;
        for (let i = 0; i < this.lessonList.length; i++) {

            if (addTolessonName === this.lessonList[i]) {

                lessonID = i + 1;
            }
        }

        //surandam mokiny mokiniu sarase ir jam priskiriam id numeri pagal numeri is sarasao
        for (let i = 0; i < this.studentsList.length; i++) {

            if (studentsName === this.studentsList[i]) {
                this.marksList.push({ studentId: i + 1, lessonID: lessonID, mark, date })
                // this.marksList[i].studentId = i + 1;
            }
        }


        console.log(this.marksList);

    }
}

module.exports = ClassDiary;



//kuriam objectui pamokos mokiniu objecta su pazymiais
// for (const lesson of this.lessonList) {
//     if (lesson.lessonName === addTolessonName) {
//         lesson.student = [{ name: studentsName, marks: [{ mark, date }] }];
//         console.log(lesson.student);
//         break;
//     }
// }