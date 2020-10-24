import Link from 'next/link'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import styles from '../styles/Header.module.css'

function header() {
  return (
    <div className={styles.header}>
			<Link href="/">
				<img
					src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
					alt=""
					className={styles.header__logo}
				/>
			</Link>
			<div className={styles.header__search}>
				<input type="text" className={styles.header__searchInput} />
				<div className={styles.header__searchIcon}>
					<SearchIcon />
				</div>
			</div>
			<div className={styles.header__nav}>
				<div className={styles.header__option}>
					<span className={styles.header__optionLineOne}>Hello Guest</span>
					<span className={styles.header__optionLineTwo}>Sign In</span>
				</div>
				<div className={styles.header__option}>
					<span className={styles.header__optionLineOne}>Return</span>
					<span className={styles.header__optionLineTwo}>& Order</span>
				</div>
				<div className={styles.header__option}>
					<span className={styles.header__optionLineOne}>Your</span>
					<span className={styles.header__optionLineTwo}>Prime</span>
				</div>
				<Link href="/checkout">
					<div className={styles.header__optionBasket}>
						<ShoppingBasketIcon />
						<span className={styles.header__optionLineTwo.header__basketCount}>
							0
						</span>
					</div>
				</Link>
			</div>
		</div>
  )
}

export default header
