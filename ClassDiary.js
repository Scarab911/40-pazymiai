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
        this.showedAverages = []

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

        const jonas = 'Jono pazymai';
        let pazymiaiLog = '';

        let lygybes = '';

        const equalString = '=';

        const space = ' '; //SPACE
        const letterNumber = this.findLongest(this.lessonList);



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

            this.showedInfo.push(`${lesson}${space.repeat(letterDiff)}: ${oneLessonMarks.join(`, `)}`)//sukuriam array is tekstu skirta pazymiams
            if (print) {

                this.showedAverages.push(`${lesson}${space.repeat(letterDiff)}: ${average}`);
            }

        }
        //apsiskaiciuojam ilgiausia texta ir pakartojam duota string tiek kartu
        const textLength = this.findLongest(this.showedInfo)
        lygybes = equalString.repeat(textLength);

        if (print) {
            console.log(jonas);
            console.log(lygybes);
            console.log(this.showedInfo.join('\n'));
            console.log(lygybes);
        }
    }
    showStudentsAverageMark(name) {

        const jonas = 'Jono pazymiu vidurkis';
        let lygybes = '';

        this.showStudentsMarks(name, false); //pagal iskviesta mokiny perskaiciuoja ir perraso vidurki

        const space = ' '; //SPACE
        const letterNumber = this.findLongest(this.showedAverages); //susirandam igiausio saraso zodzio ilgi

        for (let i = 0; i < this.lessonList.length; i++) {
            const lesson = this.lessonList[i];

            const letterDiff = letterNumber - lesson.length;

        }

        const equalString = '=';
        lygybes = `${equalString.repeat(letterNumber)}`

        console.log(`${jonas}`);
        console.log(`${lygybes}`);
        console.log(this.showedAverages.join('\n'));
        console.log(`${lygybes}`);

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
