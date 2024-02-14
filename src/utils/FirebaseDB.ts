import database from "@react-native-firebase/database";
export const handleDatabase = () => {
    addUserData();
};

const addUserData = () => {
    // Adding a new user
    const newUser = {
        username: "john_doe",
        email: "john@example.com",
    };
    // Set the value for the new user at the specified path
    database()
        .ref("/users/data")
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
        .ref("/users/data")
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
        .ref("/users/data")
        .update({
            age: 32,
        })
        .then(() => console.log("Data updated."));
};
