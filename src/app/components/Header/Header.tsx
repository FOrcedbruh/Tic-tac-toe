import { Dispatch, FC, SetStateAction } from "react";
import styles from './Header.module.scss'
import { motion } from "framer-motion";
import { TPlayer } from "../../App";
import TelegramLoginButton from "../TelegramLoginButton/TelegramLoginButton";


interface IHeaderProps {
    values: string[],
    setValues: Dispatch<SetStateAction<string[]>>,
    setPlayer: Dispatch<SetStateAction<TPlayer>>
}

export const Header: FC<IHeaderProps> = ({ values, setValues, setPlayer }) => {

    const resetHandler = () => {
        setValues([
            "", "", "", "", "", "", "", "", ""
        ])
        setPlayer("cross")
    }

    const handleBot = (user: any) => {
        console.log(user)
    }

    return (
        <header className={styles.header}>
            <TelegramLoginButton
                botName="TicTacToeJS_bot"
                buttonSize="medium"
                cornerRadius={3}
                usePic={false}
                dataOnauth={handleBot}
                className={styles.tgBtn}
            />
            <motion.button onClick={resetHandler} whileTap={{ y: 5}} className={styles.reset}>
                Reset
            </motion.button>
        </header>
    )
}
