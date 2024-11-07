import { Dispatch, FC, SetStateAction, useEffect, useRef } from "react";
import styles from './WinnerModal.module.scss'
import { motion } from "framer-motion";
import drawIcon from './../../../assets/icons/crossAndCircle.png'

interface IModalProps {
    value: string
    setWinner: Dispatch<SetStateAction<string | null>>
}

export const WinnerModal: FC<IModalProps> = ({ value, setWinner }) => {

    const modalRef = useRef<HTMLDivElement>(null)

    const clickOutside = (e: any) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setWinner(null)
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", clickOutside)

        return () => {
            document.removeEventListener("mousedown", clickOutside)
        }
    })

    return (
        <motion.div className={styles.blur}>
            <motion.div ref={modalRef}  initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: 20}} className={styles.modal}>
                <h1>{value === drawIcon ? "In draw" : "Winner is"}</h1>
                <img src={value} alt="" width={40} height={40}/>
            </motion.div>
        </motion.div>
    )
}