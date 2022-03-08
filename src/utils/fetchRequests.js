export const postRequest = async () => {
    try {
      const response = await fetch("http://localhost:5001/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "person1",
          email: "person1@gmail.com",
          phone: "07852735627",
          pass: "test123",
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

export const getRequest = async () => {
    try {
      const response = await fetch("http://localhost:5001/user", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "person1",
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  