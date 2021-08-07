class ClassDiary {
    constructor(className) {
        this.class = className;

        this.studentsList = [];
        this.lessonList = [];

        this.studentIdCount = 0;
        this.lessonIdCount = 0;

        this.marksList = [];
        this.lessonAverageMarkList = [];

        this.showedInfo = [];

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
        const equalString = '=';

        const space = ' '; //SPACE
        const letterNumber = this.findLongest(this.lessonList);

        if (print) {

            console.log(`Jono pazymiai`);
            console.log(`${equalString.repeat(letterNumber)}`);
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
            const letterDiff = letterNumber - lesson.length;

            this.showedInfo.push(`${lesson}${space.repeat(letterDiff)}: ${oneLessonMarks.join(`, `)}`)//sukuriam array is tekstu

            if (print) {

                console.log(`${lesson}${space.repeat(letterDiff)}: ${oneLessonMarks.join(`, `)}`)
            }

        }
        //apsiskaiciuojam ilgiausia texta ir pakarotjam duota string tiek kartu
        const textLength = this.findLongest(this.showedInfo)

        if (print) {

            console.log(`${equalString.repeat(textLength)}`);
        }
    }
    showStudentsAverageMark(name) {

        console.log('Jono pazymiu vidurkis');
        console.log('=====================');

        this.showStudentsMarks(name, false); //pagal iskviesta mokiny perskaiciuoja ir perraso vidurki

        const space = ' '; //SPACE
        const letterNumber = this.findLongest(this.lessonList); //susirandam igiausio saraso zodzio ilgi

        for (let i = 0; i < this.lessonList.length; i++) {
            const lesson = this.lessonList[i];

            const letterDiff = letterNumber - lesson.length;

            console.log(`${lesson}${space.repeat(letterDiff)}: ${this.lessonAverageMarkList[i]}`);
        }

        const equalString = '=';
        console.log(`${equalString.repeat(letterNumber + 6)}`);
    }
    findLongest(array) {

        let ilgiausias = '';
        for (let i = 0; i < array.length; i++) {
            const zodis = array[i];
            if (zodis.length > ilgiausias.length) {
                ilgiausias = zodis;
            }
        }

        return ilgiausias.length
    }
}

module.exports = ClassDiary;
