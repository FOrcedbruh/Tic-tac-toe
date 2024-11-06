import { FC } from "react";
import styles from  './BoardItem.module.scss'
import { motion, AnimatePresence } from "framer-motion";


interface IBoardItemProps {
    value: string,
    onClick: () => void
}




export const BoardItem: FC<IBoardItemProps> = ({ value, onClick }) => {


    return (
        <motion.div whileTap={{scale: 0.9}} className={styles.item} onClick={onClick}>
            <AnimatePresence>
                {value && <motion.img initial={{opacity: 0, scale: 0.7}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 0.7}} src={value} alt="icon"/>}
            </AnimatePresence>
        </motion.div>
    )
}