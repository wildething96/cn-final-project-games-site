export const postRequest = async (
  firstName,
  lastName,
  username,
  email,
  password
) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        username,
        email,
        password,
      }),
      mode: "cors",
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const getRequest = async (username) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username }),
    });
    const data = await response.json();
    console.log(data.user[0]);
    return data.user[0];
    // setProfile(data.user[0]);
  } catch (error) {
    console.log(error);
  }
};
