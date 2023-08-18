import Link from "next/link"
import styles from './footer.module.css'

export default function Footer() {


    return(

        <>

<footer
  className="bg-transparent text-center dark:bg-neutral-700 lg:text-left">
  <div className={`p-4 text-center text-black ${styles.linkStyles}`}>
    © 2023 Copyright:
    <Link
      className={`text-neutral-800 text-neutral-400 `}
      href="https://github.com/FranzieYoogan/"
      > <span className={`${styles.spanFooter}`}>GamesBlog</span></Link>
  </div>
</footer>

        </>

    )

}