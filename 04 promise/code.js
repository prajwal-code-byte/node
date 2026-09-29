// Step 1: Function that returns a Promise
function fetchStudent() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Rahul");
        }, 2000);
    });
}

// Step 2: Async function to get student
async function loadStudent() {
    const student = await fetchStudent();
    console.log(student);
}

// Step 3: Call the function
loadStudent();