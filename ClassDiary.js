class ClassDiary {
    constructor(className) {
        this.class = className;

        this.studentsList = [];
        this.lessonList = [];

        this.studentIdCount = 0;
        this.lessonIdCount = 0;

        this.marksList = [];
        this.lessonAverageMarkList = [];

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
    }
    showStudentsMarks(studentsName, print = true) {
        if (print) {

            console.log(`Jono pazymiai`);
            console.log(`==========================`);
        }

        let studentsID = 0;
        for (let i = 0; i < this.studentsList.length; i++) {

            if (studentsName === this.studentsList[i]) {
                studentsID = i + 1;
                break;
            }
        }

        let tempStudentsAverageMarkList = [];

        for (let i = 0; i < this.lessonList.length; i++) {
            const lesson = this.lessonList[i];

            let markCount = 0;
            let sumOfLessonMarks = 0;
            let oneLessonMarks = [];

            let id = i + 1;

            for (const mark of this.marksList) {

                if (mark.studentId === studentsID &&
                    mark.lessonID === id) {
                    sumOfLessonMarks += mark.mark;
                    markCount++;
                    oneLessonMarks.push(mark.mark);
                }
            }
            const average = sumOfLessonMarks / markCount;

            tempStudentsAverageMarkList.push(average);

            this.lessonAverageMarkList = tempStudentsAverageMarkList;

            console.log(this.lessonAverageMarkList);
            if (print) {

                console.log(`${lesson}: ${oneLessonMarks.join(`, `)}`)
            }

        }
        if (print) {

            console.log(`========================== `);
        }
    }
    showStudentsAverageMark(name) {

        console.log('Jono pazymiu vidurkis');
        console.log('=====================');

        this.showStudentsMarks(name, false);
        for (let i = 0; i < this.lessonList.length; i++) {
            const lesson = this.lessonList[i];
            console.log(`${lesson}: ${this.lessonAverageMarkList[i]}`);
        }
        console.log('=====================');
    }
}

module.exports = ClassDiary;
