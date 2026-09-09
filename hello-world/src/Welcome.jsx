// function Welcome() {
//   return <h2>Welcome, Rohan </h2>
// }


// const Welcome = () => {
//     return <h2>Welcome, Rohan </h2>
// }

// default export should be renamed arbitrarily
// export default Welcome;


// export const Welcome = (props) => {
//     return <h2>Welcome, {props.test} a.k.a {props.alias} </h2>
// }
export const Welcome = ({test,alias}) => {
    return <h2>Welcome, {test} a.k.a {alias} </h2>
}
