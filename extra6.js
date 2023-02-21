const studentData = [
    {
        class: 10,
        details: [
            {
                studentId: '1',
                gradingDetails: [{ grade: 'A' }]
            },
            {
                studentId: '2',
                gradingDetails: [{ grade: 'B' }] /* aida find korte hbe */
            }
        ]
    },
    {
        class: 11,
        details: [
            {
                studentId: 3,
                gradingDetails: [{ grade: 'C' }]      
            },
            {
                studentId: 4,
                gradingDetails: [{ grade: 'D' }]       /* aida find korte hbe */
            }
        ]
    },
]
console.log(studentData[0].details[1].gradingDetails[0].grade);
console.log(studentData[1].details[1].gradingDetails[0].grade);