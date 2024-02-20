import database from "@react-native-firebase/database";

export const handleDatabase = () => {
    addUserData();
};

const addUserData = () => {
    // Adding a new user
    const newUser = {
        caption: "This is post by me1",
        image: "my_base64 url",
        added_by: "Priya1",
    };
    // Set the value for the new user at the specified path
    database()
        .ref("/post/")
        .set(newUser)
        .then(
            () => {
                console.log("User added successfully");
                getUserData();
            },
            err => {
                console.error("Error adding user:", err);
            },
        )
        .catch(error => {
            console.error("Error adding user:", error);
        });
};

const getUserData = () => {
    // Read data once
    database()
        .ref("/post")
        .once("value")
        .then(snapshot => {
            // Access the data from the snapshot
            const userData = snapshot.val();
            if (userData) {
                console.log("Retrieved data:", userData);
                updateUserData();
            } else {
                console.log("No data found");
            }
        })
        .catch(error => {
            console.error("Error reading data:", error);
        });
};

const updateUserData = () => {
    // Read data once
    database()
        .ref("/post")
        .update({
            age: 32,
            caption: "This is post by me1 updated one",
        })
        .then(() => console.log("Data updated."));
};
