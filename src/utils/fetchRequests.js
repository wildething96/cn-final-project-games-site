export const postRequest = async () => {
  try {
    const response = await fetch("https://m33-back-end.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
          firstName: "ThisIsTheTest",
          lastName: "ThisIsTheTest",
        username: "testytesttest",
        email: "testperson3@gmail.com",
        phone: "078263921731",
        pass: "test123",
      }),
      mode: "cors",
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const getRequest = async () => {
  try {
    const response = await fetch("https://m33-back-end.herokuapp.com/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "person2" }),
    });
    const data = await response.json();
    console.log(data);
    // console.log(data.user[0]);
    // setProfile(data.user[0]);
  } catch (error) {
    console.log(error);
  }
};
