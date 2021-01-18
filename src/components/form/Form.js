import React, { useState, useEffect } from "react";

const Form = ({ addContact }) => {
  const [name, setName] = useState("");

  //   componentDidMount
  useEffect(() => {
    localStorage.getItem("info") &&
      setName(JSON.parse(localStorage.getItem("info")));
  }, []);

  //   componentDidUpdate
  useEffect(() => {
    console.log("CDU");
  }, [name]);

  //   componentWillUnmount
  useEffect(() => {
    return () => {
      localStorage.setItem("info", JSON.stringify(name));
    };
  });

  const onHandleChange = (e) => {
    setName(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    addContact(name);
    setName("");
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <input type='text' name='name' onChange={onHandleChange} value={name} />
      <button type='submit'>Add contact</button>
    </form>
  );
};

export default Form;

// import React, { Component } from "react";

// class Form extends Component {
//   state = {
//     name: "",
//   };

//   //   componentDidMount() {
//   //     console.log("componentDidMount");
//   //   }

//   componentWillUnmount() {
//     console.log("componentWillUnmount");
//   }

//   onHandleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   onHandleSubmit = (e) => {
//     e.preventDefault();
//     this.props.addContact(this.state.name);
//   };

//   render() {
//     return (
//   <form onSubmit={this.onHandleSubmit}>
//     <input
//       type='text'
//       name='name'
//       onChange={this.onHandleChange}
//       value={this.state.name}
//     />
//     <button type='submit'>Add contact</button>
//   </form>
//     );
//   }
// }

// export default Form;
