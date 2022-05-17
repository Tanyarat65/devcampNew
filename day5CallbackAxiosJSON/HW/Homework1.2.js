axios.get("https://reqres.in/api/users").then(function (response) {
            let row = document.getElementById("row");
            let row2 = document.getElementById("row2");
            let row3 = document.getElementById("row3");
            let textHtml1 = "";
            let textHtml2 = "";
            let textHtml3 = "";


            for (let i = 0; i < response.data.data.length; i++) {
                textHtml1 += "<td><p>" + response.data.data[i].first_name + "</p></td>";
            }
            console.log(textHtml1);
            row.innerHTML = textHtml1;

            for (let i = 0; i < response.data.data.length; i++) {
                textHtml2 += "<td><p>" + response.data.data[i].email + "</p></td>";
            }
            row2.innerHTML = textHtml2;

            for (let i = 0; i < response.data.data.length; i++) {
                textHtml3 += "<td><img src='" + response.data.data[i].avatar + "'></td>";
            }
            row3.innerHTML = textHtml3

            // for(let i = 0; i < response.data.data.length; i++){
            //     let img = "<p><img src='" + response.data.data[i].avatar + "'></p>";
            //     textHtml += "<td>" + response.data.data[i].first_name + response.data.data[i].email + img + "</td>";
            // }
            // row.innerHTML = textHtml;
        })