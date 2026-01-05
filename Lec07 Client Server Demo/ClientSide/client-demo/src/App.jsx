import './App.css'

const apiUrl = 'https://localhost:7265/api/Students/';

function App() {


  const btngetAll = () => {
    fetch(apiUrl, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
          result.map(st => console.log(st.name));
          console.log('result[0].FullName=', result[0].name);
        },
        (error) => {
          console.log("err post=", error);
        });

  }


  const btngetById = () => {
    fetch(apiUrl + '3', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
          console.log('result.name=', result.name);
        },
        (error) => {
          console.log("err post=", error);
        });
  }

  const btnPost = () => {
    const s = { //pay attention case sensitive!!!! should be exactly as the prop in C#!
      Id: 0,
      Name: 'nir',
      Grade: 77
    };

    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(s),
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        console.log('res=', res);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch POST= ", result);
          console.log(result.Grade);
        },
        (error) => {
          console.log("err post=", error);
        });
  }

  const btnPut = () => {
    const s = { //pay attention case sensitive!!!! should be exactly as the prop in C#!
      Id: 3,
      Name: 'nir',
      Grade: 77
    };

    fetch(apiUrl + "3", {
      method: 'PUT',
      body: JSON.stringify(s),
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log(res.status);
        console.log(res.status == 204);
      }, (error) => {
        console.log("err post=", error);
      });
  }

   const btnDel = () => {
    

    fetch(apiUrl + "3", {
      method: 'DELETE',
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log(res.status);
        console.log(res.status == 204);
      }, (error) => {
        console.log("err post=", error);
      });
  }

  return (
    <>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={btngetAll}>Get All</button> <br />
        <button onClick={btngetById}>Get By ID</button> <br />
        <button onClick={btnPost}>Post</button> <br />
        <button onClick={btnPut}>Put</button> <br />
        <button onClick={btnDel}>Delete</button> <br />
      </div>
    </>
  )
}

export default App
