let data = {
    data:

        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda", /* aita */
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner", /* aita */
            }
        ]
}
console.log(data.data[0].bookDetails.name);
console.log(data.data[1].bookCategory);