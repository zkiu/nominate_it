import HeaderBtnComp from '../HeaderBtnComp/HeaderBtnComp'

export default function Header() {
	return (
		<header>
			<div className="container">
				<div className="logoContainer">
					<h1 className="logo hover">🍿 The Shoppies: Nomitate It!</h1>
				</div>
				<HeaderBtnComp />
			</div>
		</header>
	)
}
