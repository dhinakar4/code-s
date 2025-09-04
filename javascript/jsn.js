
        let contacts =  [  
        {
            id : 1,
            name : 'arun',
            course : 'full stack',
            age : 20,
            phono : 9589744795,
            addrs : 'coimbatore'
        },
        {
            id : 2,
            name : 'banu',
            course : 'web developer',
            age : 23,
            phono : 9876543210,
            addrs : 'erode'
        }
    ];   

    function search(){
    let search = contacts.find(contacts => contacts.name === 'arun')
    // let result = JSON.stringify(search)
    // document.getElementById('result').innerHTML = result ;
    // console.log(search)
    if (search){
        let table = `<table border = '2'>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Course</th>
                <th>Age</th>
                <th>Contact</th>
                <th>City</th>
            </tr>
            <tr>
                <td>${search.id}</td>
                <td>${search.name}</td>
                <td>${search.course}</td>
                <td>${search.age}</td>
                <td>${search.phono}</td>
                <td>${search.addrs}</td>
            </tr>
            </table>`;
            document.getElementById('result').innerHTML = table;
    } else {
        document.getElementById('result').innerHTML = "No Records";
    }
    }

    function sort(){
        let sort = contacts.sort((a,b)=> a.name.localeCompare(b.name));
        // let result = JSON.stringify(sort)
        // document.getElementById('result').innerHTML = result
        // console.log(sort)
         if (sort.length > 0){
        let table = `<table border =  '2'>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Course</th>
                <th>Age</th>
                <th>Contact</th>
                <th>City</th>
            </tr> `;
            sort.forEach(c => {
                table +=`
             <tr>
                <td>${c.id}</td>
                <td>${c.name}</td>
                <td>${c.course}</td>
                <td>${c.age}</td>
                <td>${c.phono}</td>
                <td>${c.addrs}</td>
            </tr>`;
            });
            table += "</table>";
            document.getElementById('result').innerHTML = table;
    } else {
        document.getElementById('result').innerHTML = "No Records";
    }
    }

    function filter(){
        let filter = contacts.filter(contacts => contacts.age < 23)
        // let result = JSON.stringify(filter)
        // document.getElementById('result').innerHTML = result
        // console.log(filter)
         if (filter){
        let table = `<table border = '2'>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Course</th>
                <th>Age</th>
                <th>Contact</th>
                <th>City</th>
            </tr>`;
            filter.forEach(c => {
                table +=

            `<tr>
                <td>${c.id}</td>
                <td>${c.name}</td>
                <td>${c.course}</td>
                <td>${c.age}</td>
                <td>${c.phono}</td>
                <td>${c.addrs}</td>
            </tr>
            </table>`;
            });
            document.getElementById('result').innerHTML = table;
    } else {
        document.getElementById('result').innerHTML = "No Records";
    }
    }

    function insert(){
        contacts.push({id :3, name : 'cibi',course : 'flutter developer',age : 25,phono : 6382291469,addrs : 'sathy'})
        // let result = JSON.stringify(contacts)
        // document.getElementById('result').innerHTML = result
        // console.log(contacts)
          if (contacts.length > 0){
        let table = `<table border = '2'>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Course</th>
                <th>Age</th>
                <th>Contact</th>
                <th>City</th>
            </tr>`;
            contacts.forEach(c => {
                table +=`
            <tr>
                <td>${c.id}</td>
                <td>${c.name}</td>
                <td>${c.course}</td>
                <td>${c.age}</td>
                <td>${c.phono}</td>
                <td>${c.addrs}</td>
            </tr>`;
            });
            table += '</table>';
            document.getElementById('result').innerHTML = table;
    } else {
        document.getElementById('result').innerHTML = "No Records";
    }
    }

    function update(){
        let update = contacts.map(c => c.name === 'arun' ? {...c , name : 'ajay', age : 27,addrs : 'salem'} :c );
        // let result = JSON.stringify(update)
        // document.getElementById('result').innerHTML = result
        // console.log(update)
         if (update){
        let table = `<table border = '2'>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Course</th>
                <th>Age</th>
                <th>Contact</th>
                <th>City</th>
            </tr>`;
            update.forEach(c => {
                table +=
            `<tr>
                <td>${c.id}</td>
                <td>${c.name}</td>
                <td>${c.course}</td>
                <td>${c.age}</td>
                <td>${c.phono}</td>
                <td>${c.addrs}</td>
            </tr>`;
            });
            table += "<table>";
            document.getElementById('result').innerHTML = table;
    } else {
        document.getElementById('result').innerHTML = "No Records";
    }
    }
    
    function delet(){
        let delet = contacts.filter(contacts => contacts.name !== 'banu')
        // let result = JSON.stringify(delet)
        // document.getElementById('result').innerHTML = result
        // console.log(delet)
          if (delet){
        let table = `<table border = '2'>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Course</th>
                <th>Age</th>
                <th>Contact</th>
                <th>City</th>
            </tr>`;
            delet.forEach(c => {
                table +=
            `<tr>
                <td>${c.id}</td>
                <td>${c.name}</td>
                <td>${c.course}</td>
                <td>${c.age}</td>
                <td>${c.phono}</td>
                <td>${c.addrs}</td>
            </tr>`;
            });
            table += "<table>";
            document.getElementById('result').innerHTML = table;
    } else {
        document.getElementById('result').innerHTML = "No Records";
    }
    }
