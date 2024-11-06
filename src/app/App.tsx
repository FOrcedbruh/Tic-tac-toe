import { FC, useEffect, useState } from "react";
import { BoardItem } from "./components/BoardItem/BoardItem";
import crossIcon from './../assets/icons/cross.png'
import nullIcon from './../assets/icons/circle.png'
import { Header } from "./components/Header/Header";
import { findWinner } from "./utils/findWinner";
import { WinnerModal } from "./components/WinnerModal/WinnerModal";
import { AnimatePresence } from "framer-motion";

export type TPlayer = "cross" | "null"

const App: FC = () => {

    const [values, setValues] = useState<string[]>([
        "", "", "", "", "", "", "", "", ""
    ])

    const [player, setPlayer] = useState<TPlayer>("cross")
    const [winner, setWinner] = useState<string | null>(null)


    const playerHandler = (index: number) => {
        if (player === "cross") {
            setPlayer("null")
            if (!values[index]) {
                values[index] = crossIcon
                setValues([...values])
            }
        } else {
            setPlayer("cross")
            if (!values[index]) {
                values[index] = nullIcon
                setValues([...values])
            }
        }
    }

    useEffect(() => {
        setWinner(findWinner(values))
    }, [values])

    return (
        <main className="main">
            <Header values={values} setValues={setValues} setPlayer={setPlayer}/>
            <AnimatePresence>
                {winner && <WinnerModal setWinner={setWinner} value={winner!}/>}
            </AnimatePresence>
            <section className="board">
                {values.map((value, index) => {
                    return (
                        <BoardItem onClick={() => playerHandler(index)} key={index} value={value}/>
                    )
                })}
            </section>
        </main>
    )
}


export default App;
