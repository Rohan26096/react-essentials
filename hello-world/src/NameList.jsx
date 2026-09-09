export const NameList = () => {
    const names = ["Bruce","Clark","Diana","Bruce"]
    const nameList = names.map((name, index) => { return <h2 key={index}> {name} {index} </h2> })
    return <div>{nameList}</div>
}