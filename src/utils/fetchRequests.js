export const postRequest = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}User`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: "ThisIsTheTest",
        lastName: "ThisIsTheTest",
        username: "testytesttest",
        email: "testperson3@gmail.com",
        password: "test123",
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// export const getRequest = async (setProfile) => {
//   try {
//     const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         username: "person1",
//       }),
//     });
//     const data = await response.json();
//     console.log(data.user[0]);
//     setProfile(data.user[0]);
//   } catch (error) {
//     console.log(error);
//   }
// };
