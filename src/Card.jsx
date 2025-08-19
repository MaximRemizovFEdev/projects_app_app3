const wrapper = {
    width: "100%",
    maxWidth: "200px",
    border: "1px solid #ffffff",
    borderRadius: "10px",
    padding: "15px 25px"
}

const description = {
    maxWidth: "190px",
}

export const Card = (props) => {
    const {titleText, descriptionText, statusValue, toChangeStatus} = props;

    return (
        <div style={wrapper}>
            <h3>{titleText}</h3>
            <p style={description}>
                {descriptionText}
            </p>
            <div>
                <p><b>Статус</b></p>
                <select name="select" onSelect={() => toChangeStatus()}>
                    <option value="value1" selected={statusValue === "to do"}>to do</option>
                    <option value="value2" selected={statusValue === "in progress"}>in progress</option>
                    <option value="value3" selected={statusValue === "done"}>done</option>
                </select>
            </div>
        </div> 
    )
}