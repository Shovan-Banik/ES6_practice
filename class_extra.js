class Man{
    name;
    legs=2;
    hands=2;
    eyes=2;
    manner='Well';
    constructor(name,legs,hands,eyes,manner){
        this.name=name;
        // this.legs=legs;
        // this.hands=hands;
        // this.eyes=eyes;
    }
    takeMeal(event){
        console.log(`Take meal ${event}`);
    }
}
class Student extends Man{
    id;
    group='science';
    school='Balla coronation high school';
    constructor(name,id){
        super(name);
        this.id=id;
    }
    comeToSchool(time){
        console.log(`come to school at ${time}`);
    }
    goToHome(event){
        console.log(`come back to home at ${event}`);
    }
}
class Teacher extends Man{
    faculty='FSIT';
    operation='teaching';
    constructor(name){
        super(name)
    }
    MakeExam(subject){
        console.log(`Make exam paper for ${subject}`)
    }
}
const mofiz=new Student('mofiz',2);
console.log(mofiz);
mofiz.comeToSchool('9:30 am');
mofiz.goToHome('At 4.00 pm');
const chandu=new Teacher('Sajjad chandu');
console.log(chandu);
chandu.MakeExam('english');