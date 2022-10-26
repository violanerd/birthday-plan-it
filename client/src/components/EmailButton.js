import React from "react";

function EmailButton () {

    async function handleSendEmail(e) {
        e.preventDefault();
        const response = await fetch("http://localhost:3001/myparty", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            }
        })
        // .then((res) => res.json())
        // .then(async (res) => {
        //     const resData = await res;
        //     console.log(resData)
        //     if (resData.status === "success") {
        //         alert("Message Sent");
        //       } else if (resData.status === "fail") {
        //         alert("Message failed to send");
        //       }
        //     })
        console.log(response)
    }

    return (
        <div>
            <button onClick={handleSendEmail}>Email my invite!</button>
        </div>
    )
}

export default EmailButton;