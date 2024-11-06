import { Dispatch, FC, SetStateAction } from "react";
import styles from './Header.module.scss'
import { motion } from "framer-motion";
import { TPlayer } from "../../App";


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

    return (
        <header className={styles.header}>
            <motion.button onClick={resetHandler} whileTap={{ y: 5}} className={styles.reset}>
                Reset
            </motion.button>
        </header>
    )
}
