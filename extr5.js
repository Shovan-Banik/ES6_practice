let instructor = {
    name: "Jhankar Mahbub",
    entrepreneur: true,
    additionalData: {
        writer: true,
        favoriteHobbies: ["travelling", "Coding"],
        books: ["programming er bolod to bos", "programming er coddogosti"], /* coddogusthi find */
            moreDetails: {
                favoriteBasketballTeam: "XYZ",
                isYoungest: true,
                hometown: {
                    city: "ABC",
                    state: "VW",/* aita find*/
                },
                countriesLivedIn: ["Bangladesh", "New York"] /* banglades find */
            }
    }
}
console.log(instructor.additionalData.books[1]);
console.log(instructor.additionalData.moreDetails.hometown.state);
console.log(instructor.additionalData.moreDetails.countriesLivedIn[0]);