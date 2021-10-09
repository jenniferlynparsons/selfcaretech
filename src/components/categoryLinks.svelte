<ul id="main-menu">
	<li>
		<button>Menu</button>
		<ul>
			<li>
				<div>
					<a href="remote" class="pseudo button nowrap">Remote work resources</a>
					<a href="about" class="pseudo button nowrap">About the site</a>
					<hr />
				</div>
			</li>
			<li><a href="/#general" class="pseudo button nowrap">general self-care</a></li>
			<li><a href="/#crisis-tools" class="pseudo button nowrap">tools to use right now</a></li>
			<li><a href="/#work" class="pseudo button nowrap">burnout prevention</a></li>
			<li><a href="/#recovery" class="pseudo button nowrap">burnout recovery</a></li>
			<li><a href="/#exercises" class="pseudo button nowrap">exercise and health</a></li>
			<li>
				<a href="/#meditationresources" class="pseudo button nowrap">meditation resources</a>
			</li>
			<li><a href="/#meditations" class="pseudo button nowrap">meditations &amp; tools</a></li>
			<li><a href="/#offline" class="pseudo button nowrap">offline activities</a></li>
			<li><a href="/#tools-app" class="pseudo button nowrap">general tools &amp; apps</a></li>
			<li><a href="/#noise" class="pseudo button nowrap">noise generators</a></li>
			<li><a href="/#gaming" class="pseudo button nowrap">helpful games</a></li>
			<li><a href="/#bots" class="pseudo button nowrap">self care bots</a></li>
			<li><a href="/#talks" class="pseudo button nowrap">talks &amp; articles</a></li>
			<li><a href="/#podcasts" class="pseudo button nowrap">podcasts</a></li>
			<li><a href="/#newsletters" class="pseudo button nowrap">newsletters</a></li>
			<li><a href="/#uplift" class="pseudo button nowrap">uplift &amp; positivity</a></li>
			<li><a href="/#humane" class="pseudo button nowrap">humane tech</a></li>
			<li><a href="/#journaling" class="pseudo button nowrap">self-exploration</a></li>
			<li><a href="/#building" class="pseudo button nowrap">building self-care tools</a></li>
		</ul>
	</li>
</ul>

<style>
	#main-menu {
		display: flex;
	}

	#main-menu > li a {
		margin-top: 5px;
	}

	hr {
		border-bottom-color: #37b4da;
		margin-top: 20px;
	}

	ul {
		list-style: none;
		margin: 3px 0 0 0;
		padding-left: 0;
	}

	li {
		display: block;
		float: right;
		position: relative;
		text-decoration: none;
		transition-duration: 0.5s;
	}

	li:hover,
	li:focus-within {
		cursor: pointer;
	}

	li:focus-within a {
		outline: none;
	}

	ul li ul {
		visibility: hidden;
		opacity: 0;
		min-width: 5rem;
		position: absolute;
		transition: all 0.5s ease;
		right: 0;
		display: none;
		background-color: #fff;
		padding: 0 10px 20px;
		top: 45px;
	}

	ul li:hover ul,
	ul li:focus-within ul,
	ul li ul:hover,
	ul li ul:focus {
		visibility: visible;
		opacity: 1;
		display: block;
	}

	ul li ul li {
		clear: both;
		width: 100%;
		margin: 0;
		padding: 0;
	}
	ul li ul li a {
		margin: 0;
	}
</style>
