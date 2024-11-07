import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import styles from './Header.module.scss'
import { motion } from "framer-motion";
import { TPlayer } from "../../App";
import TelegramLoginButton from "../TelegramLoginButton/TelegramLoginButton";


interface IHeaderProps {
    values: string[],
    setValues: Dispatch<SetStateAction<string[]>>,
    setPlayer: Dispatch<SetStateAction<TPlayer>>,
    winner: string
}

export const Header: FC<IHeaderProps> = ({ setValues, setPlayer, values }) => {

    const [authUser, setAuthUser] = useState<any>(null)

    const resetHandler = () => {
        setValues([
            "", "", "", "", "", "", "", "", ""
        ])
        setPlayer("cross")
    }

    const handleBot = (data: any) => {
        let user = data
        setAuthUser(user)
        localStorage.setItem("auser", JSON.stringify(user))
    }

    useEffect(() => {
        localStorage.setItem("board", JSON.stringify(values))
    }, [values])

    return (
        <header className={styles.header}>
           {authUser !== null ? <div className={styles.user}><img src={authUser.photo_url} width={30} height={30} alt="" /><p>{authUser.username}</p></div> : 
           <TelegramLoginButton
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
