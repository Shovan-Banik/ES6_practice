const person={
    name:{
        fName:'Shovan',
        lName:'Banik'
    },
    education:{step:
        [
            {
        SSC: 'Balla coronation high school',
        HSC: 'Modhupur shahid smrity college',
        BSC: 'Daffodil international university'
    }
]
},
    skill:{
        language:['C','javascript','HTML','CSS'],
        frameWork:['Bootstrap','Tailwind']
    }

};
console.log(person.skill.frameWork[1]);
console.log(person.education.step[0].BSC);
console.log(person.education?.step[0]?.MSC);

