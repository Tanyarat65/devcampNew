        // Make a request for a user with a given ID
        axios.get('https://reqres.in/api/users?page=2')
            .then(function (response) {
                // handle success
                console.log(response);
            })