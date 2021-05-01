import {FaGithubAlt, FaLinkedin} from 'react-icons/fa'
import {GoMailRead} from 'react-icons/go'
import {HiOutlineBriefcase} from 'react-icons/hi'

export default function AboutPage() {
	return (
		<div className="profile-container">
			<a href="https://zkiu.github.io/portfolio/">
				<HiOutlineBriefcase className="profileBtn" />
			</a>
			<a href="https://github.com/zkiu">
				<FaGithubAlt className="profileBtn" />
			</a>
			<a href="https://www.linkedin.com/in/devkiu/">
				<FaLinkedin className="profileBtn" />
			</a>
			<a href="mailto:ukeqlee@gmail.com?subject=qstory">
				<GoMailRead className="profileBtn" />
			</a>
		</div>
	)
}
