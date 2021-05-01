import {FaGithubAlt, FaLinkedin} from 'react-icons/fa'
import {HiOutlineBriefcase} from 'react-icons/hi'

export default function AboutPage() {
	return (
		<div className="profile-container">
			<a href="https://zkiu.github.io/portfolio/">
				<HiOutlineBriefcase className="profileBtn" />
			</a>
			<a href="https://github.com/zkiu/nominate_it">
				<FaGithubAlt className="profileBtn" />
			</a>
			<a href="https://www.linkedin.com/in/devkiu/">
				<FaLinkedin className="profileBtn" />
			</a>
		</div>
	)
}
