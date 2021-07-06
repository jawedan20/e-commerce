import style from "../../styles/Order.module.css";
import Image from "next/image";
import Link from "next/link";

const ErrOrder = () => {
    return (
        <div className={style.empty}>
            <Image
                src="/Online Shopping_Monochromatic.svg"
                alt="Empty image"
                width={200}
                height={180}
            />
            <h2 className={style.message}>No orders yet</h2>
            <p className={style.child}>Shop your necessities now or change Your filter</p>
            <Link href="/">
                <button className={style.btn}>Shopping Now</button>
            </Link>
        </div>
    );
};

export default ErrOrder;
