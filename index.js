// Add your code here
const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      dogName: "Byron",
      dogBreed: "Poodle",
    }),
  };

  fetch("http://localhost:3000/dogs", configurationObject)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    console.log(object)
  }).catch(function (error) {
    alert("Bad things! Ragnarok!");
    console.log(error.message)
  });

  function submitData(name="Jeffrey", email="email") {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`,
        }),
    }).then(function (response) {
        return response.json();
    }).then(function (object) {
        let p = document.createElement('p');
        p.innerHTML = object.id;
        document.body.appendChild(p);
        console.log(object);
    }).catch(function (error) {
        let h4 = document.createElement('h4');
        h4.innerHTML = error.message;
        document.body.appendChild(h4);
        console.log(error.message)
        alert("Bad things! Ragnarok!");
        
      });
  }

submitData()