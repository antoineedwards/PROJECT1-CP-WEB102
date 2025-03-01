import React from "react";

function Board() {
    return (
        <>
            <div className="header"
            style={{
                backgroundColor: "rgb(0, 0, 0)",
                color: "white",
                padding: "2%",
                margin: "0 0 30px 0",
                textAlign: "center",
            }}>
                <div>
                    <img src="/src/assets/image-removebg-preview.png" 
                    style={{
                        borderWidth: "8px",
                        borderStyle: "solid",
                        borderColor: "rgb(135, 211, 230)",
                        padding:"10px",
                        maxWidth: "100px",
                        borderRadius: "50%",
                        backgroundColor: "white"
                    }}/>
                </div>
                <h1
                style={{
                    fontFamily: "Trebuchet MS",
                    fontWeight: "bold",
                }}>
                    MONTGOMERY MAVERICKS FC
                </h1>
                <h3>
                    Community Board
                </h3>
                <p>
                    Here are our upcoming games for the 2025 season!
                </p>
            </div>
        </>
    )
}

export default Board;   