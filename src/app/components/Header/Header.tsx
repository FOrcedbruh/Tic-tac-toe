import { Dispatch, FC, SetStateAction, useState } from "react";
import styles from './Header.module.scss'
import { motion } from "framer-motion";
import { TPlayer } from "../../App";
import TelegramLoginButton from "../TelegramLoginButton/TelegramLoginButton";


interface IHeaderProps {
    values: string[],
    setValues: Dispatch<SetStateAction<string[]>>,
    setPlayer: Dispatch<SetStateAction<TPlayer>>
}

export const Header: FC<IHeaderProps> = ({ setValues, setPlayer }) => {

    const [authUser, setAuthUser] = useState<any>(null)

    const resetHandler = () => {
        setValues([
            "", "", "", "", "", "", "", "", ""
        ])
        setPlayer("cross")
    }

    const handleBot = (user: any) => {
        setAuthUser(user)
        localStorage.setItem("auser", JSON.stringify(user))
    }

    return (
        <header className={styles.header}>
           {authUser !== null ? <div className={styles.user}><img src={authUser.photo_url} width={30} height={30} alt="" /><p>{authUser.username}</p></div> : <TelegramLoginButton
                botName="TicTacToeJS_bot"
                buttonSize="medium"
                cornerRadius={3}
                usePic={false}
                dataOnauth={handleBot}
                className={styles.tgBtn}
            />}
            <motion.button onClick={resetHandler} whileTap={{ y: 5}} className={styles.reset}>
                Reset
            </motion.button>
        </header>
    )
}
