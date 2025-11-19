const user = {
    name: "Shubh",
    showName: () => console.log(user.name)
};

user.showName();

const fixedUser = {
    name: "Shubh",
    showName: function() {
        console.log(this.name);
    }
};

fixedUser.showName();